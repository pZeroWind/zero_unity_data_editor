import { AppSideBarItem } from "@/app/models/app-sidebar";
import Image from "next/image";

export default async function AppSideBar({
    headerName,
    tabConfig
}: Readonly<{
    headerName : string;
    tabConfig : Array<AppSideBarItem>;
}>) {
    //渲染tab列表
    const sideBarTabsHTML = tabConfig.map((tab, index) => {
        let children;
        if (tab.children.length > 0) {
            const childHTML = tab.children.map((child, i) => {
                return (
                    <li key={`tab_child_${i}`}>
                        <a href={`${child.route}`} className="flex font-bold hover:bg-white hover:bg-opacity-20 transition p-2 text-sm px-5 rounded">
                            <Image width={20} height={20} className="mr-3" src={`${child.icon}`} alt={`image_${child.name}`}/>
                            {child.name}
                        </a>
                    </li>
                )
            })
            children = (
                <ul className="mt-1 space-y-2">
                    {childHTML}
                </ul>
            )
        }

        return (

            <li key={`tab_${index}`}>
                <a href={`${tab.route}`} className="flex font-bold  hover:bg-white hover:bg-opacity-20 transition p-2 rounded">
                    <Image width={20} height={20} className="mr-3" src={`${tab.icon}`} alt={`image_${tab.name}`}/>
                    {tab.name}
                </a>
                {(children ? children : undefined)}
            </li>
        )
    })

    return (
        <aside className="relative w-64 bg-black z-40 shadow-[5px_0_10px_rgba(0,0,0,0.5)] text-white flex-shrink-0 select-none">
            <div className="p-4">
                <h2 className="text-2xl p-2 font-bold">{headerName}</h2>
                <ul className="mt-4 space-y-2">
                    {sideBarTabsHTML}
                </ul>
            </div>
            <div className="absolute bottom-[50%] right-[-20px]">
                <button className="bg-gray-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none">
                    
                </button>
            </div>
        </aside>
    );
}