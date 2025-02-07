import { Injectable, MessageEvent, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, Subject } from 'rxjs';
import { UpdateScoreDto } from 'src/dto/update.score.dto';
import { Scoreboard } from 'src/models/scoreboard.model';
import { Repository } from 'typeorm';

/**
 * Service responsible for managing the scoreboard.
 * Implements the `OnModuleInit` interface to perform initialization tasks when the module is initialized.
 *
 * @class ScoreboardService
 * @implements {OnModuleInit}
 */
@Injectable()
export class ScoreboardService implements OnModuleInit {
  private subject = new Subject<MessageEvent>();

  constructor(
    @InjectRepository(Scoreboard)
    private scoreboardRepository: Repository<Scoreboard>,
  ) {}

  /**
   * Initializes the module by checking if a scoreboard entry with id 1 exists.
   * If it does not exist, it creates a new scoreboard entry with initial scores set to 0 for both home and away.
   * This method is called automatically when the module is initialized.
   *
   * @async
   * @method onModuleInit
   * @returns {Promise<void>} A promise that resolves when the initialization is complete.
   */
  async onModuleInit(): Promise<void> {
    /**
     * Retrieves the scoreboard entry with id 1 from the database.
     */
    let scoreboard = await this.scoreboardRepository.findOne({
      where: { id: 1 },
    });

    /**
     * If the scoreboard entry does not exist, create a new entry with initial scores set to 0.
     */
    if (!scoreboard) {
      scoreboard = this.scoreboardRepository.create({ home: 0, away: 0 });
      await this.scoreboardRepository.save(scoreboard);
    }
  }

  /**
   * Retrieves the scoreboard entry with id 1 from the database.
   *
   * @returns {Promise<Scoreboard>} A promise that resolves to the scoreboard entry.
   * @throws {Error} If the scoreboard entry is not found.
   */
  async getScoreboard(): Promise<Scoreboard> {
    const scoreboard = await this.scoreboardRepository.findOne({
      where: { id: 1 },
    });

    /**
     * If the scoreboard is not found, an error is thrown.
     */
    if (!scoreboard) {
      throw new Error('Scoreboard not found');
    }

    /**
     * Returns the scoreboard entry.
     */
    return scoreboard;
  }

  /**
   * Updates the scoreboard with the provided data and notifies subscribers.
   *
   * @param {UpdateScoreDto} updateDto - The data transfer object containing the updated scoreboard information.
   * @returns {Promise<Scoreboard>} A promise that resolves to the updated scoreboard.
   */
  async updateScoreboard(updateDto: UpdateScoreDto): Promise<Scoreboard> {
    await this.scoreboardRepository.update(1, updateDto);
    const updated = await this.getScoreboard();
    this.subject.next({ data: updated });
    return updated;
  }

  /**
   * Returns an observable stream of server-sent events (SSE).
   *
   * @returns {Observable<MessageEvent>} An observable that emits MessageEvent objects.
   */
  getSseStream(): Observable<MessageEvent> {
    return this.subject.asObservable();
  }
}
