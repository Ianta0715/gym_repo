"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredential = exports.createCredential = void 0;
let credentials = [];
let nextId = 1;
const createCredential = (username, password) => {
    const newCredential = {
        credentialId: nextId++,
        username,
        password
    };
    credentials.push(newCredential);
    return newCredential.credentialId;
};
exports.createCredential = createCredential;
const validateCredential = (username, password) => {
    const credential = credentials.find(cred => cred.username === username);
    if (credential && credential.password === password) {
        return credential.credentialId;
    }
    return null;
};
exports.validateCredential = validateCredential;
