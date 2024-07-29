import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialService";



const returnAllUsers = async (): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.find({ relations: ["credentialId", "appointments"] });
};

const returnUserById = async (userId: number): Promise<User | null> => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOne({ where: { userId }, relations: ["credentialId", "appointments"] });
};

const createNewUser = async (name: string, email: string, birthday: Date, nDni: number, username: string, password: string): Promise<number> => {
    const userRepository = AppDataSource.getRepository(User);

    // Create and save new credential
    const credentialId = await createCredential(username, password);
    const credentialRepository = AppDataSource.getRepository(Credential);
    const credential = await credentialRepository.findOneBy({ credentialId });

    if (!credential) {
        throw new Error('Failed to create credential');
    }

    // Create new user
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthday = birthday;
    newUser.nDni = nDni;
    newUser.credentialId = credential; 

    const savedUser = await userRepository.save(newUser);
    return savedUser.userId;
};


export { returnAllUsers ,returnUserById, createNewUser};