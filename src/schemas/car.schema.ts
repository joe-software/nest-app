
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarDocument = HydratedDocument<CarDataCollection>;

@Schema()
export class CarDataCollection {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  date: Date;

  @Prop()
  colour: string;

  @Prop()
  mongoid: string;
}

export const CarSchema = SchemaFactory.createForClass(CarDataCollection);
