export interface AppSideBarItem{
    name:string,
    icon:string,
    route:string,
    children: Array<AppSideBarItemChild>
}

export interface AppSideBarItemChild{
    name:string,
    icon:string,
    route:string
}