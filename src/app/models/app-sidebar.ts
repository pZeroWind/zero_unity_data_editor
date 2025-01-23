//侧边栏数据
export interface AppSideBarItem{
    name:string,
    icon:string,
    route:string,
    children: Array<AppSideBarItemChild>
}

//侧边栏子数据
export interface AppSideBarItemChild{
    name:string,
    icon:string,
    route:string
}