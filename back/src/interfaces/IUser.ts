import { Credential } from "../entities/Credential";

interface IUser {
    userId:number,
    name:string,
    email:string,
    birthday: Date,
    nDni: number,
    credentialId: Credential 
}

export default IUser;