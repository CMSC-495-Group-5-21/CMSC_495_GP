import {MigrationInterface, QueryRunner} from "typeorm";

export class restart1614891475135 implements MigrationInterface {
    name = 'restart1614891475135'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`uuid` varchar(36) NOT NULL, `username` varchar(40) NOT NULL, `passwordHash` varchar(255) NOT NULL, `firstName` varchar(255) NOT NULL, `middleName` varchar(255) NULL DEFAULT NULL, `lastName` varchar(255) NOT NULL, `suffix` varchar(255) NULL DEFAULT NULL, `prefix` varchar(255) NULL DEFAULT NULL, `admin` tinyint NOT NULL DEFAULT 0, `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted` datetime(6) NULL, UNIQUE INDEX `IDX_78a916df40e02a9deb1c4b75ed` (`username`), PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `room_type` (`uuid` varchar(36) NOT NULL, `typeName` varchar(255) NOT NULL, `typeCost` int NOT NULL, `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted` datetime(6) NULL, UNIQUE INDEX `IDX_2a2fb7e39a3ffd68740409985b` (`typeName`), PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `room` (`uuid` varchar(36) NOT NULL, `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted` datetime(6) NULL, `roomTypeUuid` varchar(36) NULL, PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `reservation` (`uuid` varchar(36) NOT NULL, `startDate` datetime NOT NULL, `endDate` datetime NOT NULL, `adminCreate` tinyint NOT NULL DEFAULT 0, `specialRequests` varchar(255) NOT NULL DEFAULT 'None', `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deleted` datetime(6) NULL, `assignedRoomUuid` varchar(36) NULL, `createdByUuid` varchar(36) NULL, PRIMARY KEY (`uuid`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `room` ADD CONSTRAINT `FK_48b2e513d58d8a8d6a404988b37` FOREIGN KEY (`roomTypeUuid`) REFERENCES `room_type`(`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `reservation` ADD CONSTRAINT `FK_6bba23c8dd2cdee1e912d794a60` FOREIGN KEY (`assignedRoomUuid`) REFERENCES `room`(`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `reservation` ADD CONSTRAINT `FK_dfbb13dfa7912db6e45fa52239d` FOREIGN KEY (`createdByUuid`) REFERENCES `user`(`uuid`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `reservation` DROP FOREIGN KEY `FK_dfbb13dfa7912db6e45fa52239d`");
        await queryRunner.query("ALTER TABLE `reservation` DROP FOREIGN KEY `FK_6bba23c8dd2cdee1e912d794a60`");
        await queryRunner.query("ALTER TABLE `room` DROP FOREIGN KEY `FK_48b2e513d58d8a8d6a404988b37`");
        await queryRunner.query("DROP TABLE `reservation`");
        await queryRunner.query("DROP TABLE `room`");
        await queryRunner.query("DROP INDEX `IDX_2a2fb7e39a3ffd68740409985b` ON `room_type`");
        await queryRunner.query("DROP TABLE `room_type`");
        await queryRunner.query("DROP INDEX `IDX_78a916df40e02a9deb1c4b75ed` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
