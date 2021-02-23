import {Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn
} from "typeorm";

import {RoomType} from "./RoomType";
import {Reservation} from "./Reservation";

@Entity()
export class Room {

  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @OneToOne(() => RoomType)
  @JoinColumn()
  roomType!: RoomType;

  @OneToMany(() => Reservation, reservation => reservation.assignedRoom)
  reservations!: Reservation[];

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;

}
