"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { Activity, HeartHandshake, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = ({ isShow }) => {
    const { user } = useUser();

    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            icon: <LayoutGrid />,
            path: "/dashboard",
        },
        {
            id: 2,
            name: "Assessment",
            icon: <HeartHandshake />,
            path: "/dashboard/assessment",
        },
        {
            id: 3,
            name: "Status",
            icon: <Activity />,
            path: "/dashboard/status",
        },
    ];

    const path = usePathname();

    return (
        <div>
            {
                isShow && (
                    <div className="h-screen p-5 border shadow-md transition-all">
                        <Link href={'/'}>
                            <div className="flex items-center gap-2 cursor-pointer">
                                <Image src={"/caire-logo.png"} alt="logo" width={40} height={40} />
                                <p className="text-xl font-bold sm:block hidden">c<span className="logo-text">AI</span>re</p>
                            </div>
                        </Link>
                        <div className="mt-5">
                            {menuList.map((menu, index) => (
                                <Link href={menu.path} key={menu.id || index}>
                                    <div>
                                        <h2
                                            className={`flex gap-2 items-center text-white font-medium p-5 cursor-pointer rounded-md hover:text-light hover:bg-primary-200 transition-all mb-2 ${path == menu.path && "text-light bg-primary"
                                                }`}
                                        >
                                            {menu.icon}
                                            {menu.name}
                                        </h2>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="fixed bottom-5 p-2 flex gap-2 items-center text-light">
                            <UserButton />
                            <div className="">
                                <p className="text-sm font-bold">{user?.fullName}</p>
                                <p className="text-xs text-slate-400">{user?.primaryEmailAddress?.emailAddress}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SideNav;