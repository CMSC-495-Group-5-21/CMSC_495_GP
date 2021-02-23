import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany
} from "typeorm";

import {User} from "./User";
import {Room} from "./Room";

@Entity()
export class Reservation {

  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;

  @ManyToOne(() => Room, assignedRoom => assignedRoom.reservations)
  assignedRoom!: Room;

  @ManyToOne(() => User, createdBy => createdBy.reservations)
  createdBy!: User;

  @Column({default: false})
  adminCreate!: boolean;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;


}
