import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Represents a scoreboard with scores for home and away teams.
 */
@Entity()
export class Scoreboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  home: number;

  @Column({ default: 0 })
  away: number;
}
