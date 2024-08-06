import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Appointment } from '../entities/Appointment';


export const AppDataSource = new DataSource({
    type: 'postgres', 
    host: 'localhost',
    port: 5432, 
    username: 'postgres',
    password: 'A1b2.@c?',
    database: 'gimnasio_db',  
    dropSchema:false,                                    
    synchronize: true,
    logging: false,
    entities: [User,Credential,Appointment],
    migrations: [],
    subscribers: [],
});
