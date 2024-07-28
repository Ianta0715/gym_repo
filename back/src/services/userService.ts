import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import IUser from "../interfaces/IUser";
import { createCredential } from "./credentialService";



const returnAllUsers = async():Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User)
    return await userRepository.find();
};

const returnUserById = async (userId: number): Promise<User | null> => {
    const userRepository = AppDataSource.getRepository(User);
    return await userRepository.findOneBy({ userId });
};

const createNewUser = async (name: string, email: string, birthday: Date, nDni: number, username: string, password: string): Promise<number> => {
    const userRepository = AppDataSource.getRepository(User);
    const credentialId = await createCredential(username, password);

    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthday = birthday;
    newUser.nDni = nDni;
    newUser.credentialId = credentialId;

    const savedUser = await userRepository.save(newUser);
    return savedUser.userId;
};


export { returnAllUsers ,returnUserById, createNewUser};