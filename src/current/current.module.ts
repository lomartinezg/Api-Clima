import { Module } from '@nestjs/common';
import { CurrentController } from './current.controller';
import { CurrentService } from './current.service';


@Module({
  imports: [],
  controllers: [CurrentController],
  providers: [CurrentService],
  exports: [CurrentService],
})
export class CurrentModule {}
