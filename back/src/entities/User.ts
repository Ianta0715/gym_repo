import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        length: 100    
    })
    name: string;

    @Column()
    email: string;

    @Column()
    birthday: Date;

    @OneToOne(() => Credential)
    @JoinColumn({ name: "credentialId" })
    credentialId: Credential;

    @OneToMany(() => Appointment, appointment => appointment.user)
    appointments: Appointment[];
}
