"use client"

import ButtomNav from "@/components/custom/Dashboard/ButtomNav";
import DashboardHeader from "@/components/custom/Dashboard/DashboardHeader";
import SideNav from "@/components/custom/Dashboard/SideNav";
import React, { useState } from "react";

const DashboardLayout = ({ children }) => {
    const [show, setShow] = useState(true)

    const showSideNav = () => {
        setShow((prev) => !prev);
    }

    return (
        <div>
            <div className="fixed md:w-64 hidden md:block">
                <SideNav isShow={show} />
            </div>
            <div className={`${show ? "md:ml-64" : ""} transition-all`}>
                <DashboardHeader showSideNav={showSideNav} />
                <div className="p-5 mb-28 md:mb-0">{children}</div>
            </div>
            <div className="fixed block md:hidden w-full bottom-0">
                <ButtomNav />
            </div>
        </div>
    );
};

export default DashboardLayout;