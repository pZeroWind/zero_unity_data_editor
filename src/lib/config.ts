import { AppSideBarItem } from "@/app/models/app-sidebar";

const TabConfig : Array<AppSideBarItem> = [
    {
        name: "项目首页",
        icon: "/home-icon.svg",
        route: "/",
        children:[],
    },
    {
        name: "数据配置",
        icon: "/database-icon.svg",
        route: "/data_config",
        children:[],
    },
    {
        name: "数据管理",
        icon: "/file-edit-icon.svg",
        route: "/data_manager",
        children:[]
    }
];

const useTabConfig = ()=> TabConfig;

export { useTabConfig }