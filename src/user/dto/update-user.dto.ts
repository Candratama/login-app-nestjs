// src/user/dto/update-user.dto.ts
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Gender } from '../schemas/user.schema';
import { getHoroscopeAndZodiac } from '../utils/horoscoope.util';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  @Transform(({ value }) => value.toISOString().split('T')[0], {
    toPlainOnly: true,
  })
  birthdate?: Date;

  @IsOptional()
  @IsString()
  @Transform(({ obj }) => getHoroscopeAndZodiac(obj.birthdate).horoscope, {
    toPlainOnly: true,
  })
  horoscope: string;

  @IsOptional()
  @IsString()
  @Transform(({ obj }) => getHoroscopeAndZodiac(obj.birthdate).zodiac, {
    toPlainOnly: true,
  })
  zodiac: string;

  @IsOptional()
  @IsNumber()
  height?: number;

  @IsOptional()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  interest?: string[];
}
