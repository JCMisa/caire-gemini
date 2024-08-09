import { Activity, ChartSpline, Heart } from 'lucide-react'
import React from 'react'

const Steps = () => {
    return (
        <div>
            <section className="text-gray-400 body-font">
                <h2 className='flex justify-center items-center text-3xl pt-24 text-light font-bold text-white'>How it Works?</h2>
                <p className='flex justify-center items-center text-sm text-gray-500 pb-10'>Take control of your health status in just four simple steps.</p>
                <div className="container px-5  mx-auto flex flex-wrap">
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-200 text-white relative z-10 title-font font-medium text-sm">1</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-primary-100 rounded-full inline-flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">Quick and Secure Login</h2>
                                <p className="leading-relaxed">
                                    Authenticate with Clerk Auth for seamless access. Get started by creating an account or logging in with your existing credentials. Our secure authentication process ensures your data privacy and protection.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-200 text-white relative z-10 title-font font-medium text-sm">2</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-primary-100 rounded-full inline-flex items-center justify-center">
                                <Heart className="w-12 h-12" />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">Input Your Health Information</h2>
                                <p className="leading-relaxed">
                                    Provide essential details about your health condition. Share relevant information about your symptoms, medical history, and current treatment plans. Your data will be used to create a personalized health profile.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-200 text-white relative z-10 title-font font-medium text-sm">3</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-primary-100 rounded-full inline-flex items-center justify-center">
                                <Activity className="w-12 h-12" />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">Receive Tailored Insights</h2>
                                <p className="leading-relaxed">
                                    Get actionable recommendations based on your health data. Our AI analyzes your information to provide insights, potential diagnoses, and treatment options. Access clear and easy-to-understand reports.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-200 text-white relative z-10 title-font font-medium text-sm">4</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-gray-800 text-primary-100 rounded-full inline-flex items-center justify-center">
                                <ChartSpline className="w-12 h-12" />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-white mb-1 text-xl">Monitor and Manage Your Health</h2>
                                <p className="leading-relaxed">
                                    Track your health journey and stay informed. Use our tools to monitor your symptoms, record medication, and set health goals. Stay empowered with regular updates and personalized recommendations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Steps