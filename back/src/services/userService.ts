import User from "../interfaces/IUser";
import { createCredential } from "./credentialService";


let users:User[] = [];
let nextUserId = 1;

const returnAllUsers = () => {
    return users;
};

const returnUserById = (id:number):User | undefined =>{
 const userId = users.find(user=> user.userId === id);
return userId;
};

const createNewUser = ( name:string,email:string,birthday: Date,nDni: number,username:string, password:string ):number => {
    const newCredential = createCredential(username,password);

    const newUser:User ={
        userId:nextUserId,
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