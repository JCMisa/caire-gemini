"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { db } from '@/utils/db';
import { Assessment, Result } from '@/utils/schema';
import { desc, eq } from 'drizzle-orm';
import { useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
import { CheckCircle, Trash } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const StatusPage = () => {
    const { user } = useUser();

    const [assessmentList, setAssessmentList] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const getAllAssessment = async () => {
        setIsLoading(true)
        try {
            const result = await db.select()
                .from(Assessment)
                .where(eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(Assessment?.id))

            if (result) {
                setAssessmentList(result);
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
        } finally {
            setIsLoading(false)
        }
    }

    const deleteAssessment = async (assessment) => {
        s
        setIsLoading(true)
        try {
            const data = await db.delete(Assessment)
                .where(eq(Assessment?.id, assessment?.id))

            if (data) {
                // delete also record in Result table where the reference id is the same with the assessment's
                const result = await db.delete(Result)
                    .where(eq(Result?.assessmentReferenceId, assessment?.resultReferenceId))

                if (result) {
                    toast(
                        <p className='font-bold text-sm text-green-500'>
                            Assessment and result deleted successfully!
                        </p>
                    )
                }
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while deleting data
                </p>
            )
        } finally {
            getAllAssessment()
            setIsLoading(false)
        }
    }

    const markAsResolved = async (assessment) => {
        setIsLoading(true)
        try {
            const result = await db.update(Assessment)
                .set({
                    resolved: true
                })
                .where(eq(Assessment?.id, assessment?.id))

            if (result) {
                toast(
                    <p className='font-bold text-sm text-green-500'>
                        {assessment?.illness} marked as resolved
                    </p>
                )
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while resolving illness
                </p>
            )
        } finally {
            getAllAssessment();
            setIsLoading(false)
        }
    }

    const markAsUnResolved = async (assessment) => {
        setIsLoading(true)
        try {
            const result = await db.update(Assessment)
                .set({
                    resolved: false
                })
                .where(eq(Assessment?.id, assessment?.id))

            if (result) {
                toast(
                    <p className='font-bold text-sm text-green-500'>
                        {assessment?.illness} marked as unresolved
                    </p>
                )
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while resolving illness
                </p>
            )
        } finally {
            getAllAssessment();
            setIsLoading(false)
        }
    }

    useEffect(() => {
        user && getAllAssessment();
    }, [user])

    return (
        <div className="p-7">
            <div className='flex flex-row items-center justify-between'>
                <h2 className='font-bold text-4xl'>Manage Status</h2>
                <Link href={'/dashboard/assessment'}>
                    <div className="flex float-end justify-center w-14 h-14 items-center rounded-full linear-bg cursor-pointer">
                        <h2 className="text-3xl">+</h2>
                    </div>
                </Link>
            </div>
            {(!assessmentList && isLoading) ? (
                <div className='mt-10'>
                    <div className='grid grid-cols-7 bg-dark-200 p-2 mt-3 min-h-16 animate-pulse'>
                        <h2 className='font-bold'></h2>
                        <h2 className='font-bold col-span-2'></h2>
                        <h2 className='font-bold'></h2>
                        <h2 className='font-bold'></h2>
                        <h2 className='flex justify-center items-center font-bold'></h2>
                        <h2 className='flex justify-center items-center font-bold'></h2>
                    </div >

                    <div className='min-h-80 overflow-x-hidden overflow-y-auto card-scroll bg-dark-200 mt-2 animate-pulse'>
                    </div>
                </div>
            ) : (
                <div className='mt-10'>
                    <div className='grid grid-cols-7 linear-bg p-2 mt-3'>
                        <h2 className='font-bold'>ID</h2>
                        <h2 className='font-bold col-span-2'>Illness</h2>
                        <h2 className='font-bold'>Level</h2>
                        <h2 className='font-bold'>Date</h2>
                        <h2 className='flex justify-center items-center font-bold'>Resolved</h2>
                        <h2 className='flex justify-center items-center font-bold'>Action</h2>
                    </div >

                    <div className='max-h-80 overflow-x-hidden overflow-y-auto card-scroll'>
                        {assessmentList && assessmentList.map((assessment, index) => (
                            <div className='grid grid-cols-7 bg-dark-200 p-2' key={assessment?.id || index}>
                                <h2>{assessment?.id}</h2>
                                <Link href={`/dashboard/assessment/manage/${assessment?.resultReferenceId}`} className='col-span-2 underline'>{assessment?.illness}</Link>
                                <h2>{assessment?.level}</h2>
                                <h2>{assessment?.createdAt}</h2>
                                <h2 className='flex items-center justify-center cursor-pointer' onClick={() => assessment?.resolved ? markAsUnResolved(assessment) : markAsResolved(assessment)}>
                                    {assessment?.resolved ?
                                        <CheckCircle className='text-green-500' width={14} height={14} /> :
                                        <CheckCircle className='text-red-500' width={14} height={14} />}
                                </h2>
                                <div className='flex justify-center items-center cursor-pointer hover:scale-125'>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Trash className='text-red-500 hover:text-red-200' width={14} height={14} />
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your health assessment along with the results.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => deleteAssessment(assessment)} className="bg-red-500 hover:bg-red-700">
                                                    Continue
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </div>
                        ))}
                    </div>
                </div >
            )}
        </div>
    )
}

export default StatusPage