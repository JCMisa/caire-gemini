"use client"

import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
    const router = useRouter();
    const path = usePathname();
    const { user } = useUser();

    return (
        <div className="flex p-4 items-center justify-between shadow-md">
            <Link href={'/'}>
                <div className="flex gap-1 items-center">
                    <Image src={"/cAIre-logo.png"} width={40} height={40} alt="main logo" />
                    <p className="font-bold text-lg text-light">c<span className='logo-text'>AI</span>re</p>
                </div>
            </Link>

            <ul className="flex gap-6 text-sm">
                <Link href={'/dashboard'}>
                    <li
                        className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === "/dashboard" && "text-primary font-bold"
                            }`}
                    >
                        Dashboard
                    </li>
                </Link>
                <Link href={"https://jcmisa-portfolio.vercel.app/"} target="_blank">
                    <li
                        className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === "/dashboard/contact" && "text-primary font-bold"
                            }`}
                    >
                        Contact
                    </li>
                </Link>
                <Link href={`/status/${user?.primaryEmailAddress?.emailAddress}`}>
                    <li
                        className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === "/dashboard/status" && "text-primary font-bold"
                            }`}
                        onClick={() => router.push("/dashboard/upgrade")}
                    >
                        Health Status
                    </li>
                </Link>
            </ul>
            {
                user ? (
                    <UserButton />
                ) : (
                    <Link href={'/dashboard'}>
                        <Button>Get Started</Button>
                    </Link>
                )
            }

        </div>
    )
}

export default Header