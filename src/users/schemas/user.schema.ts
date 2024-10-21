
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<UserDataCollection>;

@Schema()
export class UserDataCollection {
  @Prop()
  username: string;

  @Prop()
  age: number;

  @Prop()
  bio: string;

  @Prop()
  permissions: string;

  @Prop()
  mongoid: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDataCollection);
