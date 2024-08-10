"use client"

import BarChartDashboard from '@/components/custom/Dashboard/BarChartDashboard';
import CardInfo from '@/components/custom/Dashboard/CardInfo';
import PieCharts from '@/components/custom/Dashboard/PieCharts';
import { db } from '@/utils/db';
import { Assessment } from '@/utils/schema';
import { useUser } from '@clerk/nextjs'
import { and, eq, sql } from 'drizzle-orm';
import moment from 'moment';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const DashboardPage = () => {
    const { user } = useUser();

    const [illnessCount, setIllnessCount] = useState(0)
    const [resolvedIllnessCount, setResolvedIllnessCount] = useState(0)
    const [illnessThisMonth, setIllnessThisMonth] = useState(0)
    const [mildIllnessCount, setMildIllnessCount] = useState(0)
    const [moderateIllnessCount, setModerateIllnessCount] = useState(0)
    const [severeIllnessCount, setSevereIllnessCount] = useState(0)

    useEffect(() => {
        user && getTotalIllness();
        user && getResolvedIllnessCount();
        user && getTotalMildIllness();
        user && getTotalModerateIllness();
        user && getTotalSevereIllness();
        user && getIllnessThisMonth();
    }, [user])

    const getTotalIllness = async () => {
        try {
            const data = await db.select()
                .from(Assessment)
                .where(eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress))

            if (data) {
                setIllnessCount(data?.length)
                console.log("total illness: ", data);
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
        }
    }

    const getResolvedIllnessCount = async () => {
        try {
            const data = await db.select()
                .from(Assessment)
                .where(and(
                    eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress),
                    eq(Assessment?.resolved, true)
                ))

            if (data) {
                setResolvedIllnessCount(data?.length)
                console.log("resolved illness: ", data);
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
        }
    }

    const getIllnessThisMonth = async () => {
        try {
            const data = await db.select()
                .from(Assessment)
                .where(and(
                    eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress),
                    eq(moment(Assessment?.createdAt).format('MM'), moment().format('MM'))
                ))
            if (data) {
                setIllnessThisMonth(data.length)
                console.log("illness this month: ", data);
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
        }
    }

    const getTotalMildIllness = async () => {
        try {
            const data = await db.select()
                .from(Assessment)
                .where(and(
                    eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress),
                    eq(Assessment?.level, "mild")
                ))

            if (data) {
                setMildIllnessCount(data?.length)
                console.log("total mild illness: ", data);
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
        }
    }

    const getTotalModerateIllness = async () => {
        try {
            const data = await db.select()
                .from(Assessment)
                .where(and(
                    eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress),
                    eq(Assessment?.level, "moderate")
                ))

            if (data) {
                setModerateIllnessCount(data?.length)
                console.log("total moderate illness: ", data);
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
        }
    }

    const getTotalSevereIllness = async () => {
        try {
            const data = await db.select()
                .from(Assessment)
                .where(and(
                    eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress),
                    eq(Assessment?.level, "severe")
                ))

            if (data) {
                setSevereIllnessCount(data?.length)
                console.log("total severe illness: ", data);
            }
        } catch (error) {
            toast(
                <p className='font-bold text-sm text-red-500'>
                    Internal error occured while fetching data
                </p>
            )
        }
    }

    return (
        <div className="p-7">
            <div className='flex flex-col gap-5'>
                <h2 className="text-light font-bold text-3xl">Hello <span className="logo-text">{user?.fullName}</span> 👋 </h2>
                <p className="text-gray-500">Check the status of your health, and get personalized AI assistance.</p>

                <CardInfo illnessCount={illnessCount} resolvedCount={resolvedIllnessCount} illnessMonth={illnessThisMonth} />

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                    <div className='bg-dark-200 w-full h-auto rounded-lg col-span-2'>
                        <PieCharts totalIllness={illnessCount} resolvedIllness={resolvedIllnessCount} />
                        <p className='hidden sm:block p-10 text-xs'>
                            cAIre is making a difference! This pie chart illustrates the percentage of resolved cases among the total number of illnesses reported on our platform. Your health matters, and we&apos;re committed to providing AI-driven support. Together, we&apos;re working towards a healthier community. Let&apos;s continue to use care for our health, because your path to wellness starts with cAIre.
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='bg-dark-200 w-full min-h-52 flex items-center justify-center flex-col p-3 relative -z-20 overflow-hidden'>
                            <p className='text-3xl'>{mildIllnessCount}</p>
                            <p className='text-sm text-gray-300 font-bold'>Mild Illnesses</p>
                            <Image src={'/mild-icon.png'} alt='mild' width={150} height={150} className='absolute top-20 -right-10 -z-10 opacity-40' />
                        </div>

                        <div className='bg-dark-200 w-full min-h-52 flex items-center justify-center flex-col p-3 relative -z-20 overflow-hidden'>
                            <p className='text-3xl'>{moderateIllnessCount}</p>
                            <p className='text-sm text-gray-300 font-bold'>Moderate Illnesses</p>
                            <Image src={'/moderate-icon.webp'} alt='mild' width={150} height={150} className='absolute top-20 -right-10 -z-10 opacity-40' />
                        </div>

                        <div className='bg-dark-200 w-full min-h-52 flex items-center justify-center flex-col p-3 relative -z-20 overflow-hidden'>
                            <p className='text-3xl'>{severeIllnessCount}</p>
                            <p className='text-sm text-gray-300 font-bold'>Severe Illnesses</p>
                            <Image src={'/severe-icon.webp'} alt='mild' width={150} height={150} className='absolute top-20 -right-10 -z-10 opacity-40' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage