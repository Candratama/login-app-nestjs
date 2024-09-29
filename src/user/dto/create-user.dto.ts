// src/user/dto/create-user.dto.ts
import { IsArray, IsDate, IsEnum, IsNumber, IsString } from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Gender } from '../schemas/user.schema';
import { getHoroscopeAndZodiac } from '../utils/horoscoope.util';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsString()
  email: string;

  @IsString()
  image: string;

  @IsString()
  displayName: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsDate()
  @Type(() => Date)
  @Transform(({ value }) => value.toISOString().split('T')[0], {
    toPlainOnly: true,
  })
  birthdate: Date;

  @IsString()
  @Transform(({ obj }) => getHoroscopeAndZodiac(obj.birthdate).horoscope, {
    toPlainOnly: true,
  })
  horoscope: string;

  @IsString()
  @Transform(({ obj }) => getHoroscopeAndZodiac(obj.birthdate).zodiac, {
    toPlainOnly: true,
  })
  zodiac: string;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;

  @IsArray()
  @IsString({ each: true })
  interest: string[];
}
