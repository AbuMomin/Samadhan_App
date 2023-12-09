import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('chat')
export class Chat {
  @PrimaryGeneratedColumn()
  CHAT_ID: number;

  @Column({ type: 'int' })
  SENDER_ID: number;

  @Column({ type: 'int' })
  RECEIVER_ID: number;

  @Column({ type: 'int' })
  THREAD_ID: number;

  @Column({ type: 'varchar', length: 255 })
  MESSAGE: string;
}
