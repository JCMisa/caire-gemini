import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <section className="">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="sample"
                        src="/caire-bg.gif"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" href="#">
                            <span className="sr-only">Home</span>
                            <img src="/caire-logo.png" alt="logo" width="50" height="40" />
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome Back to cAIre
                        </h2>

                        <p className="mt-4 leading-relaxed text-gray-500">
                            Your personal AI health assistant is ready to assist. Log in to access your health insights and personalized plans. Let's continue your journey towards better health together.
                        </p>
                    </div>
                </section>

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden mb-10">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full bg-gray-900 text-blue-600 sm:size-20"
                                href="#"
                            >
                                <span className="sr-only">Home</span>
                                <img src="/caire-logo.png" alt="logo" className="h-12 w-12 sm:h-20 sm:w-20" />
                            </a>

                            <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                Welcome Back to cAIre 👋
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Your personal AI health assistant is ready to assist. Log in to access your health insights and personalized plans. Let's continue your journey towards better health together.
                            </p>
                        </div>

                        <SignIn />
                    </div>
                </main>
            </div>
        </section>
    );
}