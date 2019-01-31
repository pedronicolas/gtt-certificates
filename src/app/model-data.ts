export interface User {
    id:number,
    username:string,
    password:string,
    email:string,
    role: any

}

export interface Jira{
    id:number,
    username:string,
    pass:string,
    url:string,
    component: string,
    proyect:string,
    user_id: number

}
