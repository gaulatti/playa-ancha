import { Body, Controller, Get, MessageEvent, Post, Sse } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UpdateScoreDto } from 'src/dto/update.score.dto';
import { ScoreboardService } from './scoreboard.service';
import { Scoreboard } from 'src/models/scoreboard.model';

/**
 * Controller responsible for handling scoreboard-related operations.
 */
@Controller('scoreboard')
export class ScoreboardController {
  constructor(private readonly scoreboardService: ScoreboardService) {}

  /**
   * Retrieves the current scoreboard.
   *
   * @returns {Promise<Scoreboard>} A promise that resolves to the current scoreboard.
   */
  @Get()
  async getScoreboard(): Promise<Scoreboard> {
    return this.scoreboardService.getScoreboard();
  }

  /**
   * Updates the scoreboard with the provided data.
   *
   * @param updateDto - The data transfer object containing the updated scoreboard information.
   * @returns A promise that resolves to the updated scoreboard.
   */
  @Post()
  async updateScoreboard(@Body() updateDto: UpdateScoreDto) {
    return this.scoreboardService.updateScoreboard(updateDto);
  }

  /**
   * Establishes a Server-Sent Events (SSE) stream.
   *
   * @returns {Observable<MessageEvent>} An observable that emits MessageEvent objects.
   */
  @Sse('events')
  sse(): Observable<MessageEvent> {
    return this.scoreboardService.getSseStream();
  }
}
