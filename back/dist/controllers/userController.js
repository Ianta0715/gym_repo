"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = exports.getUserById = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    res.send('Obteniendo el listado de todos los usuarios');
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    res.send(`Obteniendo el detalle del usuario con ID ${req.params.id}`);
};
exports.getUserById = getUserById;
const registerUser = (req, res) => {
    res.send('Registrando un nuevo usuario');
};
exports.registerUser = registerUser;
const loginUser = (req, res) => {
    res.send('Login del usuario');
};
exports.loginUser = loginUser;
