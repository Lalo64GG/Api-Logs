import { 
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    SaveOptions
} from 'typeorm';

@Entity('table')
export class Table extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    seat1: boolean;

    @Column({
        default: false
    })
    seat2: boolean;

    @Column({
        default: false
    })
    seat3: boolean;

    @Column({
        default: false
    })
    seat4: boolean
}