
import Link from 'next/link'
import React from 'react'

const Gallery = () => {
    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-2/3 mx-auto">
                        <div className="flex flex-wrap w-full bg-dark-200 py-32 px-10 relative mb-4">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 hover:opacity-95 transition-all absolute inset-0" src="/sample-img.png" />
                            <div className="text-center relative z-10 w-full">
                                <h2 className="text-2xl text-light font-medium title-font mb-2">Describe Your Symptoms</h2>
                                <p className="leading-relaxed">Start your health journey by providing clear details about how you're feeling.</p>
                                <Link href={'/dashboard'} className="mt-3 text-light inline-flex items-center">Get Started
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/2">
                                <div className="flex flex-wrap w-full bg-dark-200 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 hover:opacity-95 transition-all absolute inset-0" src="/sample-img.png" />
                                    <div className="text-center relative z-10 w-full">
                                        <h2 className="text-xl text-light font-medium title-font mb-2">Get Personalized Insights</h2>
                                        <p className="leading-relaxed">Receive tailored recommendations based on your symptoms.</p>
                                        <Link href={'/dashboard'} className="mt-3 text-light inline-flex items-center">Get Started
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="px-2 w-1/2">
                                <div className="flex flex-wrap w-full bg-dark-200 sm:py-24 py-16 sm:px-10 px-6 relative">
                                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-50 hover:opacity-95 transition-all absolute inset-0" src="/sample-img.png" />
                                    <div className="text-center relative z-10 w-full">
                                        <h2 className="text-xl text-light font-medium title-font mb-2">Track and Manage Your Health</h2>
                                        <p className="leading-relaxed">Stay informed and in control of your health conditions.</p>
                                        <Link href={'/dashboard'} className="mt-3 text-light inline-flex items-center">Get Started
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
