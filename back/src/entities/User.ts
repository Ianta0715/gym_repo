import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";

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
    
    @Column('integer')
    credentialId: number

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}