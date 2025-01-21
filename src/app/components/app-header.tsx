"use client";
import Image from "next/image";
import { AppSideBarItem } from "../models/app-sidebar";
import { usePathname  } from "next/navigation";



export default function AppHeader({
    tabConfig
}: Readonly<{
    tabConfig? : Array<AppSideBarItem>;
}>) {
    let route = usePathname();
    let icon = "/favicon.svg"
    if(tabConfig){
        for(const data of tabConfig){
            if (data.route == route){
                route = data.name;
                icon = `/header-icon/fill-${data.icon.replace('/','')}`;
                console.log(icon);
                break;
            }
        }
    }
    return (
        <div className="h-14 bg-white shadow-lg flex items-center pl-4">
            <Image width={24} height={24} src={icon} alt="图标"></Image>
            <div className="pl-3 select-none font-bold">
                {route}
            </div>
        </div>
    )
}