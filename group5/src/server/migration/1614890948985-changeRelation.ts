import {MigrationInterface, QueryRunner} from "typeorm";

export class changeRelation1614890948985 implements MigrationInterface {
    name = 'changeRelation1614890948985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `REL_48b2e513d58d8a8d6a404988b3` ON `room`");
        await queryRunner.query("ALTER TABLE `user` CHANGE `middleName` `middleName` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `suffix` `suffix` varchar(255) NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `prefix` `prefix` varchar(255) NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `prefix` `prefix` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `suffix` `suffix` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `middleName` `middleName` varchar(255) NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_48b2e513d58d8a8d6a404988b3` ON `room` (`roomTypeUuid`)");
    }

}
