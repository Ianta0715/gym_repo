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
exports.loginUser = exports.registerUser = exports.getUserById = exports.getAllUsers = void 0;
const userService_1 = require("../services/userService");
const credentialService_1 = require("../services/credentialService");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.returnAllUsers)();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield (0, userService_1.returnUserById)(Number(id));
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getUserById = getUserById;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthday, nDni, username, password } = req.body;
    try {
        const userId = (0, userService_1.createNewUser)(name, email, new Date(birthday), nDni, username, password);
        res.status(201).json({ message: 'Usuario registrado exitosamente', userId });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const credentialId = (0, credentialService_1.validateCredential)(username, password);
        if (credentialId !== null) {
            res.status(200).json({ message: 'Login exitoso', credentialId });
        }
        else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
