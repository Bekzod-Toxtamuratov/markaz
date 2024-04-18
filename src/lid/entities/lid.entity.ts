import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LidStatus } from '../../lid_status/entities/lid_status.entity';

@Entity()
export class Lid {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  phone_number: string;

  @Column()
  target_id: number;

  @Column()
  lig_stage_id: number;

  // @Column()
  // lid_status_id: number;

  @Column()
  test_date: string;

  @Column()
  trial_lesson_date: number;

  @Column()
  trial_lesson_group_id: number;

  @Column()
  cansel_reason_id: number;

  @ManyToOne(() => LidStatus, (lidStatus) => lidStatus.lids)
  lid_status_id: LidStatus;
}
