import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import { getHoroscopeAndZodiac } from '../utils/horoscoope.util';
import { Document } from 'mongoose';

export enum Gender {
  MEN = 'Men',
  WOMEN = 'Women',
}

@Schema()
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  image: string;

  @Prop()
  displayName: string;

  @Prop()
  gender: Gender;

  @Prop({ type: Date })
  @Type(() => Date)
  birthdate: Date;

  @Prop()
  horoscope: string;

  @Prop()
  zodiac: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop()
  interest: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', function (next) {
  const { horoscope, zodiac } = getHoroscopeAndZodiac(this.birthdate);
  this.horoscope = horoscope;
  this.zodiac = zodiac;
  next();
});
