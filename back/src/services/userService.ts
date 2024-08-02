import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import { createCredential } from "./credentialService";



const returnAllUsers = async (): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find({ relations: ["credentialId", "appointments"] });
};

const returnUserById = async (userId: number): Promise<User | null> => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOne({ where: { userId }, relations: ["credentialId", "appointments"] });
};

const createNewUser = async (name: string, email: string, birthday: Date, username: string, password: string): Promise<number> => {
    const userRepository = AppDataSource.getRepository(User);
    const credentialRepository = AppDataSource.getRepository(Credential)

    // Create and save new credential
    const credential = new Credential();
    credential.username = username;
    credential.password = password;
    const savedCredential = await credentialRepository.save(credential);

     // Create new user
     const newUser = new User();
     newUser.name = name;
     newUser.email = email;
     newUser.birthday = birthday;
     newUser.credentialId = savedCredential;


    const savedUser = await userRepository.save(newUser);
    return savedUser.userId;
};


export { returnAllUsers ,returnUserById, createNewUser};