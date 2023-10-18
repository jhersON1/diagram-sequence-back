import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class LinkDataArray extends Document {
  @Prop()
  from: string;

  @Prop()
  to: string;

  @Prop()
  text: string;

  @Prop()
  time: number;

  @Prop()
  __gohashid: number;
}

export const LinkSchema = SchemaFactory.createForClass(LinkDataArray);
