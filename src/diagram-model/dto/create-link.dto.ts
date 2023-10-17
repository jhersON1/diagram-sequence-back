import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLinkDto {
  @IsString()
  @IsOptional()
  from: string;

  @IsString()
  @IsOptional()
  to: string;

  @IsString()
  @IsOptional()
  text: string;

  @IsNumber()
  @IsOptional()
  time: number;
}
