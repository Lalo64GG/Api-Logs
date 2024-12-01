import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRecordTable1733093427436 implements MigrationInterface {
    name = 'CreateRecordTable1733093427436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "record" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "temperature" integer NOT NULL DEFAULT '0', "humedity" character varying NOT NULL, "gas_level" character varying NOT NULL, "light" boolean NOT NULL DEFAULT false, "createdat" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "seat1" boolean NOT NULL, "seat2" boolean NOT NULL DEFAULT false, "seat3" boolean NOT NULL DEFAULT false, "seat4" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "table"`);
        await queryRunner.query(`DROP TABLE "record"`);
    }

}
