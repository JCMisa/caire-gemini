"use client"

import { db } from '@/utils/db'
import { Assessment, Result } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const ManageAssessment = ({ params }) => {
    const [assessmentResult, setAssessmentResult] = useState()
    const [illness, setIllness] = useState()
    const [level, setLevel] = useState()

    const getResults = async () => {
        try {
            const result = await db.select({
                aiResult: Result?.aiResult,
                illness: Assessment?.illness,
                level: Assessment?.level
            })
                .from(Result)
                .leftJoin(Assessment, eq(Result?.assessmentReferenceId, Assessment?.resultReferenceId))
                .where(eq(Result?.assessmentReferenceId, params?.id))

            if (result) {
                console.log("assessment result: ", result[0]);
                setAssessmentResult(JSON.parse(result[0]?.aiResult))
                setIllness(result[0]?.illness)
                setLevel(result[0]?.level)
            }
        } catch (error) {
            toast(
                <p className='text-sm font-bold text-red-500'>
                    Internal error occured while fetching results
                </p>
            )
            console.log("assessment result error: ", error);
        }
    }

    useEffect(() => {
        getResults();
    }, [params?.id])

    return (
        <div className='flex flex-col gap-5'>
            {!(illness, level, assessmentResult) ? (
                <div className='flex flex-col gap-5'>
                    <div className='bg-dark-200 w-full min-h-40 rounded-lg animate-pulse'></div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div className='bg-dark-200 w-full min-h-auto animate-pulse'></div>

                        <div className='flex flex-row sm:flex-col gap-3'>
                            <div className='bg-dark-200 w-full min-h-40 animate-pulse'></div>
                            <div className='bg-dark-200 w-full min-h-40 animate-pulse'></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex flex-col gap-5'>
                    <div className='bg-dark-200 w-full min-h-40 rounded-lg flex justify-center items-center'>
                        {(illness, level) && (
                            <p className='text-3xl font-bold'>
                                {level.toUpperCase()} {illness.toUpperCase()}
                            </p>
                        )}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                        <div className='bg-dark-200 w-full min-h-auto p-5 relative'>
                            {assessmentResult && (
                                <div>
                                    <div className='max-h-32 sm:max-h-72 overflow-x-hidden overflow-y-auto card-scroll'>
                                        <p className='text-gray-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block text-gray-500 mb-4 w-5 h-5" viewBox="0 0 975.036 975.036">
                                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                            </svg>
                                            {assessmentResult?.advice}
                                        </p>
                                    </div>
                                    <p className='absolute top-5 right-8'>- c<span className='logo-text'>AI</span>re's advice</p>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='bg-dark-200 w-full min-h-40 p-5'>
                                <h2 className='font-bold text-lg'>SYMPTOMS</h2>
                                <div className='px-5'>
                                    {assessmentResult && assessmentResult?.symptoms.map((symptom, index) => (
                                        <div>
                                            <p key={index} className='text-gray-500'>
                                                - {symptom}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='bg-dark-200 w-full min-h-40 p-5'>
                                <h2 className='font-bold text-lg'>MEDICINES</h2>
                                <div className='px-5'>
                                    {assessmentResult && assessmentResult?.medicines.map((medicine, index) => (
                                        <div>
                                            <p key={index} className='text-gray-500'>
                                                - {medicine}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default ManageAssessment