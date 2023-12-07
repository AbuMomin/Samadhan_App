import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment', { name: 'ID' })
  ID: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  FIRST_NAME: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  LAST_NAME: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  EMAIL: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  PASSWORD: string;

  @Column({ type: 'int', nullable: false })
  ROLE: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  PHONE: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  LOCATION_TAG: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  ADDRESS: string;

  @Column({ type: 'varchar', length: 19, nullable: false })
  NID: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  EXPERTISE: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  DESCRIPTION: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  IMAGE_PATH: string;
}
