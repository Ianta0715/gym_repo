import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({
    name: 'credentials'
})
export class Credential{

    @PrimaryGeneratedColumn()
    credentialId: number

    @Column({
        length:100    
    })
    username: string

    @Column({
        length:100    
    })
    password: string

    @OneToOne(()=> User,user =>user.credentialId)
    user: User

}