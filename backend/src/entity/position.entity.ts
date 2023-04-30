import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class PositionEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    title: string;

    @Column('int')
    price: number;

    @Column('text')
    description: string;
}
