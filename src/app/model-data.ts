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

export interface Certificates{
    id:number;
    alias:string;
    entidadEmisora:string;
    numeroSerie:string;
    subject:string;
    fechaCaducidad:Date;
    password:string;
    idOrga:number;
    nombreCliente:string;
    listaIntegraciones:string;
    email:string;
    observaciones:string;
    repositorio:string,
    eliminado:boolean;
    fichero64:string;
    nombreArchivo:string;
    caducado:boolean,
    ticket_creado:boolean;
   
}
