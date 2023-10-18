import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class NodeDataArray extends Document {
  @Prop({ type: mongoose.Schema.Types.Mixed })
  key?: string | number;

  @Prop()
  text?: string;

  @Prop()
  isGroup?: boolean;

  @Prop()
  loc?: string;

  @Prop()
  group?: string;

  @Prop()
  start?: number;

  @Prop({ required: true })
  duration: number;

  @Prop()
  __gohashid?: number;
}

export const NodeSchema = SchemaFactory.createForClass(NodeDataArray);
