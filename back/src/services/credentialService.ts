
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";


let credentials:Credential[] = [];
let nextId = 1;

const createCredential = async(username:string,password:string):Promise<number> => {
   const credentialRepository = AppDataSource.getRepository(Credential);

    const newCredential = new Credential();
    newCredential.username = username;
    newCredential.password = password;

    const savedCredential = await credentialRepository.save(newCredential);
    return savedCredential.credentialId;
}

const validateCredential = async(username:string , password:string):Promise<number | null> => {
    const credentialRepository = AppDataSource.getRepository(Credential);
    const credential = await credentialRepository.findOneBy({ username });
    if (credential && credential.password === password) {
        return credential.credentialId;
    }
    return null;

}

export { createCredential , validateCredential };