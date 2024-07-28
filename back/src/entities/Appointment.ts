import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";


@Entity({
    name:"appointments"
})
export class Appointment {

    @PrimaryGeneratedColumn()
    AppointmentId:number

    @Column()
    date: Date
    
    @Column({
        length:100    
    })
    time: string
    
    @ManyToOne(() => User, user => user.userId)
    @JoinColumn({ name: "userId" })
    user: User;
    
    @Column({
        length:100    
    })
    status: 'active' | 'cancelled'
}