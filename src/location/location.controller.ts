import { LocationService } from './location.service';
import { LocationDto } from './dto/location';
import {
  Controller,
  Body,
  Post,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('location')
@ApiBearerAuth()
@Controller('v1/location')
export class LocationController {
  constructor(private readonly locationsService: LocationService) {}

  @Post()
  @ApiOperation({ summary: 'Weather data for one Location consulted by latitude y longitude' })
  findOne(@Body() payload: LocationDto) {
    return this.locationsService.findOne(payload);
  }

}
