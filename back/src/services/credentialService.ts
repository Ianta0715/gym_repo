
import Credential from "../interfaces/ICredential"

let credentials:Credential[] = [];
let nextId = 1;

const createCredential = (username:string,password:string):number => {
    const newCredential:Credential = {
        credentialId:nextId++,
        username,
        password
    }

    credentials.push(newCredential);
    return newCredential.credentialId;
}

const validateCredential = (username:string , password:string):number | null => {
    const credential = credentials.find(cred => cred.username === username);
    if(credential && credential.password === password){
        return credential.credentialId
    }
    return null

}

export { createCredential , validateCredential };