
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { LocationModule } from './location/location.module';
import { CurrentModule } from './current/current.module';
import { ForecasModule } from './forecast/forecast.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    LocationModule,
    CurrentModule,
    ForecasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

