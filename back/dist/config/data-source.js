"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Appointment_1 = require("../entities/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'A1b2.@c?',
    database: 'gimnasio_db',
    dropSchema: false,
    synchronize: true,
    logging: false,
    entities: [User_1.User, Credential_1.Credential, Appointment_1.Appointment],
    migrations: [],
    subscribers: [],
});
