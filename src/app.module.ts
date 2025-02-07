import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScoreboardModule } from './scoreboard/scoreboard.module';

@Module({
  imports: [
    /**
     * Serve static files from the client/dist directory.
     * This is the frontend.
     */
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'dist'),
    }),
    /**
     * Configure the TypeORM module to use an SQLite database.
     */
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'scoreboard.db',
      entities: [join(__dirname, '**', '*.model.{ts,js}')],
      synchronize: true,
    }),

    /**
     * Import the ScoreboardModule.
     */
    ScoreboardModule,
  ],

  /**
   * Declare the AppController and AppService as the main components of the module.
   */
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
