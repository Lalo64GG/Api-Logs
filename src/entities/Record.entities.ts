import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';


@Entity("record")
export class Record extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        default: 'default_value'
    })
    temperature: string;

    @Column()
    humedity: string;

    @Column()
    gas_level: string;

    @Column({
        default: false
    })
    light: boolean;

    @CreateDateColumn()
    createdat: Date;
}