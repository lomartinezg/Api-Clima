import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class ForecastDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly q: string;
} 
