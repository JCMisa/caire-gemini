import { UserButton } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardHeader = ({ showSideNav }) => {
    return (
        <div className="p-5 shadow-md border-b flex justify-between items-center">
            <div className="hidden md:block cursor-pointer">
                <AlignJustify onClick={showSideNav} />
            </div>

            <Link href={'/'}>
                <div className="flex font-medium items-center text-white mb-4 md:mb-0 md:hidden">
                    <Image src={'/caire-logo.png'} alt='logo' width={25} height={25} />
                    <span className="ml-3 text-xl logo-text">cAIre</span>
                </div>
            </Link>

            <div>
                <UserButton />
            </div>
        </div>
    );
};

export default DashboardHeader;