"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewUser = exports.returnUserById = exports.returnAllUsers = void 0;
const data_source_1 = require("../config/data-source");
const Credential_1 = require("../entities/Credential");
const User_1 = require("../entities/User");
const returnAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    return yield userRepository.find({ relations: ["credentialId", "appointments"] });
});
exports.returnAllUsers = returnAllUsers;
const returnUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    return yield userRepository.findOne({ where: { userId }, relations: ["credentialId", "appointments"] });
});
exports.returnUserById = returnUserById;
const createNewUser = (name, email, birthday, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
    const credentialRepository = data_source_1.AppDataSource.getRepository(Credential_1.Credential);
    // Create and save new credential
    const credential = new Credential_1.Credential();
    credential.username = username;
    credential.password = password;
    const savedCredential = yield credentialRepository.save(credential);
    // Create new user
    const newUser = new User_1.User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthday = birthday;
    newUser.credentialId = savedCredential;
    const savedUser = yield userRepository.save(newUser);
    return savedUser.userId;
});
exports.createNewUser = createNewUser;
