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
    
    @Column({ type: 'varchar', length: 100, default: '00:00', nullable: false })
    time: string;

    
    @ManyToOne(() => User, user => user.appointments)
    @JoinColumn({ name: "userId" })
    user!: User;

    @Column('varchar', { length: 255 })
    description: string;
    
    @Column({
        type: "enum",
        enum: ['active', 'cancelled'],
        default: 'active'
    })
    status: 'active' | 'cancelled';
}