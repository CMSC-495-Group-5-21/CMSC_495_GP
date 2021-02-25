import {Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany
} from "typeorm";

import {Reservation} from "./Reservation"

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column({length: 40, unique: true})
  username!: string;

  @Column()
  passwordHash!: string;

  @Column()
  firstName!: string;

  @Column({nullable: true})
  middleName!: string;

  @Column()
  lastName!: string;

  @Column({nullable: true})
  suffix!: string;

  @Column({nullable: true})
  prefix!: string;

  @OneToMany(() => Reservation, reservation => reservation.createdBy)
  reservations!: Reservation[];

  @Column({default: false})
  admin!: boolean;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;




}
