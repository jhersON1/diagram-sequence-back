import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateNodeDto {
  @IsString()
  @IsOptional()
  key?: string;

  @IsString()
  @IsOptional()
  text?: string;

  @IsBoolean()
  @IsOptional()
  isGroup?: boolean;

  @IsString()
  @IsOptional()
  loc?: string;

  @IsNumber()
  duration: number;

  @IsString()
  @IsOptional()
  group: string;

  @IsNumber()
  @IsOptional()
  start: number;
}
