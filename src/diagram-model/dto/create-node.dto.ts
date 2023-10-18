import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { IsStringOrNumber } from '../decorator/isStringOrNumberConstraint.decorator';

export class CreateNodeDto {
  @IsStringOrNumber({
    message: 'key debe ser una cadena de caracteres o un número',
  })
  @IsOptional()
  key?: string | number;

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
  duration?: number;

  @IsString()
  @IsOptional()
  group?: string;

  @IsNumber()
  @IsOptional()
  start?: number;

  @IsNumber()
  @IsOptional()
  __gohashid?: number;
}
