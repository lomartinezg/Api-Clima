import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LocationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lat: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly lon: string;
}
