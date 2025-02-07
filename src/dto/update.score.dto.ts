/**
 * Data Transfer Object (DTO) for updating the score.
 * This class is used to encapsulate the data required to update the score of a game.
 */
export class UpdateScoreDto {
  readonly home: number;
  readonly away: number;
}
