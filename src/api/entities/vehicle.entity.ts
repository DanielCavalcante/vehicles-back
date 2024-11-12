import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true, unique: true, length: 7 })
  placa: string;

  @Column({ nullable: false, unique: true, length: 17 })
  chassi: string;

  @Column({ nullable: false, unique: true, length: 11 })
  renavam: string;

  @Column({ nullable: true })
  modelo?: string;

  @Column({ nullable: true })
  marca?: string;
  
  @Column({ nullable: true })
  ano?: string;
}
