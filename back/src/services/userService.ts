import User from "../interfaces/IUser";
import { createCredential } from "./credentialService";


let users:User[] = [];
let nextUserId = 1;

const returnAllUsers = async():Promise<User[]> => {
    const allUsers:User[] = users;
    return allUsers;
};

const returnUserById = async(id:number):Promise<User> =>{
 const userId:User | undefined = users.find(user=> user.userId === id);
 if(!userId) throw Error(`Usuario con id ${id} no encontrado`);
return userId;
};

const createNewUser = ( name:string,email:string,birthday: Date,nDni: number,username:string, password:string ):number => {
    const newCredential = createCredential(username,password);

    const newUser:User ={
        userId:nextUserId++,
        name,
        email,
        birthday,
        nDni,
        credentialId:newCredential
    }

    users.push(newUser);
    return newUser.userId;

};


export { returnAllUsers ,returnUserById, createNewUser};