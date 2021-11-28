import { CurrentDto } from './dto/current';
import { CurrentService } from './current.service';
import {
  Controller,
  Body,
  Post,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('current')
@ApiBearerAuth()
@Controller('v1/current')
export class CurrentController {
  constructor(private readonly currentsService: CurrentService) {}

  @Post()
  @ApiOperation({ summary: 'Current weather data for one location consulted by city name - City ​​parameters "q" is optional' })
  findOne(@Body() payload: CurrentDto) {
    return this.currentsService.findOne(payload);
  }

  // @Post(':q')
  // @ApiOperation({ summary: 'Location by Geographic Coordinates (latitude, longitude)' })
  // findOne(@Param(':q') payload: CurrentDto) {
  //   return this.currentsService.findOne(payload);
  // }

  // @Get(':q')
  // @ApiOperation({ summary: 'Current or city - "city ​​parameters is optional"' })
  // findOne(@Param('q', ParseIntPipe) q: string) {
  //   return this.currentsService.findOne(q);
  // }


}
