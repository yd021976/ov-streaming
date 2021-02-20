
export interface IRouteData {
    isMenu: boolean
    title?: string
    icon?: string
    iconFont?:string
    link?: string
    isAuthRequired?: boolean
    siteZone: string // the site zone, used to set app zone user abilities based on roles
    defaultRoles?: string[] // default required roles to access site zone : Could be updated at runtime with backend site zone stored roles
}