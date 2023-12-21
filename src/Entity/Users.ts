import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm'

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    email : string

    @Column()
    first_name : string

    @Column()
    last_name : string


    @Column()
    avatar : string

    @CreateDateColumn({type : 'timestamp'})
    created_at : Date

    @UpdateDateColumn({type : 'timestamp'})
    updated_at : Date

    @DeleteDateColumn({type : 'timestamp'})
    deleted_at : Date


}