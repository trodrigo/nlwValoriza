import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Exclude } from "class-transformer";


@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    admin: boolean;

    @Exclude()
    @Column()
    password: string;

    @CreateDateColumn()
    created_ad: Date;

    @CreateDateColumn()
    updated_ad: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User };
