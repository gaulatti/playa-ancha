import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scoreboard } from 'src/models/scoreboard.model';
import { ScoreboardController } from './scoreboard.controller';
import { ScoreboardService } from './scoreboard.service';

@Module({
  imports: [TypeOrmModule.forFeature([Scoreboard])],
  providers: [ScoreboardService],
  controllers: [ScoreboardController],
})
export class ScoreboardModule {}
