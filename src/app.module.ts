import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CobaController } from './coba/coba.controller';

@Module({
  imports: [],
  controllers: [AppController, CobaController],
  providers: [AppService],
})
export class AppModule {}
