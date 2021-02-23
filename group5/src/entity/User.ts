import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn} from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  uuid!: number;

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

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;




}
