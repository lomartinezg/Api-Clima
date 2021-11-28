import { ForecastDto } from './dto/forecast';
import { ForecastService } from './forecast.service';
import {
  Controller,
  Body,
  Post,
  Param,
  Get,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('forecast')
@ApiBearerAuth()
@Controller('v1/forecast')
export class ForecastController {
  constructor(private readonly forecastService: ForecastService) {}

  // @Get()
  // @ApiOperation({ summary: 'List of brands' })
  // findAll() {
  //   return this.forecastService.findAll();
  // }

  @Post()
  @ApiOperation({ summary: '5 day weather forecast consulted by city name - City ​​parameters "q" is optional' })
  findOne(@Body() payload: ForecastDto) {
    return this.forecastService.findOne(payload);
  }

}
