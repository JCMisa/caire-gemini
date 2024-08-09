"use client"

import React, { useEffect, useState } from 'react'
import AddAssessment from './AddAssessment'
import { db } from '@/utils/db'
import { Assessment } from '@/utils/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/nextjs'
import { toast } from 'sonner'

const AssessmentList = () => {
    const { user } = useUser();

    const [isLoading, setIsLoading] = useState(false)
    const [assessmentList, setAssessmentList] = useState([])

    const getAssessmentList = async () => {
        setIsLoading(true)
        try {
            const result = await db.select()
                .from(Assessment)
                .where(eq(Assessment?.createdBy, user?.primaryEmailAddress?.emailAddress))
                .orderBy(desc(Assessment?.id))

            if (result) {
                setAssessmentList(result)
            }
        } catch (error) {
            toast(
                <p className='text-sm font-bold text-red-500'>Internal error occured while fetching data</p>
            )
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        user && getAssessmentList();
    }, [user])
    return (
        <div className="mt-7">
            <div className="grid grid-cols-1 gap-5">
                {/* <CreateBudget refreshData={() => getBudgetList()} /> */}
                <AddAssessment />

                {/* TODO: use and display assessmentList here */}
            </div>
        </div>
    )
}

export default AssessmentList