import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'links' })
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, length: 20 })
  title: string;

  @Column({ nullable: false, length: 50 })
  url: string;
}
