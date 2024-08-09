import { Activity, Ambulance, Cross, HeartPulse } from 'lucide-react'
import React from 'react'

const Statistics = () => {
    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-row justify-between items-end w-full mb-20">
                        <div className='flex flex-col text-end justify-start items-start w-full'>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">The Global Health Crisis</h1>
                            <p className="leading-relaxed">Shocking figures that highlight the urgent need for accessible healthcare.</p>
                        </div>
                        <div className='relative w-64 h-24 px-20'>
                            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmZxZHVreTVkdGI2ODU4MGhxc2txczUybDlubWxxYmticDhidTUwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/mUZBeQMkWeQlsdWPsp/giphy.webp" width="200" height="200" alt="robot" unoptimized className='absolute' />
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full card-proj shadow-lg">
                            <div className="border-2 px-4 py-6 rounded-lg min-h-72 max-h-70">
                                <HeartPulse className="text-primary w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-light">1 billion</h2>
                                <p className="leading-relaxed">A Billion People Left Behind</p>
                                <p className='text-xs mt-3'>Over a billion people worldwide lack access to essential healthcare services, leaving them vulnerable to preventable diseases.</p>
                                <a href='https://www.who.int/news/item/18-09-2023-billions-left-behind-on-the-path-to-universal-health-coverage' target='_blank' className='text-[8px] mt-2 text-start cursor-pointer underline'>World Health Organization (WHO)</a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full card-proj shadow-lg">
                            <div className="border-2 px-4 py-6 rounded-lg min-h-72 max-h-70">
                                <Ambulance className="text-primary w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-light">17 million</h2>
                                <p className="leading-relaxed">Preventable Deaths</p>
                                <p className='text-xs mt-3'>Approximately 17 million people die each year from preventable diseases due to a lack of timely diagnosis and treatment.</p>
                                <a href='https://www.healthdata.org/' target='_blank' className='text-[8px] mt-2 text-start cursor-pointer underline'>Institute for Health Metrics and Evaluation (IHME)</a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full card-proj shadow-lg">
                            <div className="border-2 px-4 py-6 rounded-lg max-h-72">
                                <Cross className="text-primary w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-light">70%</h2>
                                <p className="leading-relaxed">The Silent Epidemic</p>
                                <p className='text-xs mt-3'>A staggering 70% of all diseases have symptoms that can be detected early, emphasizing the importance of timely medical attention.</p>
                                <a href='https://www.cdc.gov/flu/symptoms/symptoms.htm' target='_blank' className='text-[8px] mt-2 text-start cursor-pointer underline'>Centers for Disease Control and Prevention (CDC)</a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full card-proj shadow-lg">
                            <div className="border-2 px-4 py-6 rounded-lg max-h-72">
                                <Activity className="text-primary w-12 h-12 mb-3 inline-block" />
                                <h2 className="title-font font-medium text-3xl text-light">Trillions of dollars</h2>
                                <p className="leading-relaxed">The Economic Burden</p>
                                <p className='text-xs mt-3'>Untreated illnesses impose a massive economic burden on healthcare systems worldwide, amounting to trillions of dollars in lost productivity and medical expenses.</p>
                                <a href='https://documents1.worldbank.org/curated/en/270131468187759113/pdf/105052-WP-PUBLIC-wb-background-paper.pdf' target='_blank' className='text-[8px] mt-2 text-start cursor-pointer underline'>The World Bank </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Statistics