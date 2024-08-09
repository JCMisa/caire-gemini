import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className="text-gray-400 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Your Path to Wellness
                            <br className="hidden lg:inline-block" />Starts with c<span className='logo-text'>AI</span>re
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Experience personalized health guidance tailored to your unique needs, access expert-backed information and actionable health plans, monitor your health metrics and track your progress over time, receive timely reminders and notifications to stay on top of your well-being, and enjoy peace of mind with 24/7 access to your health assistant.
                        </p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary-200 rounded text-lg">
                                Get Started
                            </button>
                            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        <iframe src="https://giphy.com/embed/PoOEdbrl6uWgoXMHBb" width="480" height="480" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/bluestudios-bo-blue-studios-entertainment-PoOEdbrl6uWgoXMHBb"></a></p> */}
                        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3gzcHNuMHJ4dndldm5rZzFqamZwYW43NXJqem91azR1eG53dTBwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6ryDb71Sifks8bEzIs/giphy.webp" width="480" height="480" alt="robot" unoptimized />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero