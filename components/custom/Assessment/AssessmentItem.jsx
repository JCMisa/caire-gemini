import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AssessmentItem = ({ assessment }) => {
    return (
        <Link href={`/dashboard/assessment/manage/${assessment?.resultReferenceId}`}>
            <div className="assessment-card w-full">
                <div className="assessment-card2 w-full relative">
                    <label class="avatar">
                        <Image src={'/caire-logo.png'} alt='logo' width={60} height={60} />
                    </label>
                    <label class="info">
                        <span class="info-1 relative">
                            <span className='text-xs absolute -mt-2'>
                                {assessment?.createdBy.slice(0, 20)}{assessment?.createdBy.length > 10 ? '...' : assessment?.createdBy.slice(21, assessment?.createdBy.length())}
                            </span>
                        </span>
                        <span class="info-2 relative">
                            <span className='text-xs absolute -mt-2 text-gray-400'>
                                {assessment?.createdAt}
                            </span>
                        </span>
                    </label>
                    <div class="content-1 relative flex items-center justify-center">
                        <p className='absolute text-sm font-bold'>
                            {assessment?.level} {assessment?.illness}
                        </p>
                    </div>
                    <div class="content-2 flex justify-center items-center">
                        <p className='absolute'>
                            {assessment?.resolved ? (
                                <span className='text-xs text-green-500'>Resolved</span>
                            ) : (
                                <span className='text-xs text-red-500'>Not Resolved</span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default AssessmentItem