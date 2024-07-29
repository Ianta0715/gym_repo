import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({
    name: "users"
})
    
export class User {
    @PrimaryGeneratedColumn()
    userId:number

    @Column({
        length:100    
    })
    name:string
    
    @Column()
    email:string
    
    @Column()
    birthday: Date
    
    @Column('integer')
    nDni: number
    
    @OneToOne(()=> Credential)
    @JoinColumn({ name: "credentialId"})
    credentialId: Credential;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}