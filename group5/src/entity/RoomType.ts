import {Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne
} from "typeorm";


@Entity()
export class RoomType {

  @PrimaryGeneratedColumn("uuid")
  uuid!: string;

  @Column({unique: true})
  typeName!: string;

  @Column()
  typeCost!: number;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;

}
