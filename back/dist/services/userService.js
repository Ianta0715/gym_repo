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
const credentialService_1 = require("./credentialService");
let users = [];
let nextUserId = 1;
const returnAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = users;
    return allUsers;
});
exports.returnAllUsers = returnAllUsers;
const returnUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = users.find(user => user.userId === id);
    if (!userId)
        throw Error(`Usuario con id ${id} no encontrado`);
    return userId;
});
exports.returnUserById = returnUserById;
const createNewUser = (name, email, birthday, nDni, username, password) => {
    const newCredential = (0, credentialService_1.createCredential)(username, password);
    const newUser = {
        userId: nextUserId,
        name,
        email,
        birthday,
        nDni,
        credentialId: newCredential
    };
    users.push(newUser);
    return newUser.userId;
};
exports.createNewUser = createNewUser;
