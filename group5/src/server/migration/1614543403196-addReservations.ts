import {MigrationInterface, QueryRunner} from "typeorm";

export class addReservations1614543403196 implements MigrationInterface {
    name = 'addReservations1614543403196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `middleName` `middleName` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `suffix` `suffix` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `prefix` `prefix` varchar(255) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `prefix` `prefix` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `suffix` `suffix` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `middleName` `middleName` varchar(255) NULL");
    }

}
