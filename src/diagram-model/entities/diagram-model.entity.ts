import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { NodeDataArray, NodeSchema } from './nodeDataArray.entity';
import { LinkDataArray, LinkSchema } from './linkDataArray.entity';

@Schema()
export class DiagramModel extends Document {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop([NodeSchema])
  nodes: NodeDataArray[];

  @Prop([LinkSchema])
  links: LinkDataArray[];
}

export const DiagramModelSchema = SchemaFactory.createForClass(DiagramModel);
