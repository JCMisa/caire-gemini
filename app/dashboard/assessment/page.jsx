"use client"

import AssessmentList from '@/components/custom/Assessment/AssessmentList'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const AssessmentPage = () => {
    const router = useRouter()

    return (
        <div className='relative'>
            <h2 className="font-bold text-3xl flex items-center gap-2">
                <ArrowLeft width={20} height={20} className="cursor-pointer" onClick={() => router.back()} />
                My Assessments
            </h2>
            <AssessmentList />
        </div>
    )
}

export default AssessmentPage