import React from 'react'
import { LayoutGrid, HeartHandshake, Activity } from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const ButtomNav = () => {
    const menuList = [
        {
            id: 1,
            name: "Dashboard",
            icon: <LayoutGrid />,
            path: "/dashboard",
        },
        {
            id: 2,
            name: "Students",
            icon: <HeartHandshake />,
            path: "/dashboard/assessment",
        },
        {
            id: 3,
            name: "Attendance",
            icon: <Activity />,
            path: "/dashboard/status",
        },
    ];

    const path = usePathname();

    return (
        <div className='shadow-lg min-h-20 border-t bg-dark-200'>
            <div className="flex gap-10 md:hidden justify-center items-center text-center">
                {menuList.map((menu, index) => (
                    <Link href={menu.path} key={menu.id || index}>
                        <div className='py-3'>
                            <h2
                                className={`flex gap-2 items-center text-gray-400 font-medium p-5 cursor-pointer rounded-md hover:text-light hover:bg-primary-200 transition-all mb-2 ${path == menu.path && "text-light bg-primary"
                                    }`}
                            >
                                {menu.icon}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ButtomNav