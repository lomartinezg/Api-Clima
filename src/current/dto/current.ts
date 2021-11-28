import { ApiParam, ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CurrentDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly q: string;
} 
