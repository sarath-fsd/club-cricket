import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NewsDocument = News & Document;

@Schema()
export class News {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  imageLabel: string;

  @Prop({ required: true })
  createdBy: string;

  @Prop({ required: true, default: new Date() })
  createdAt: Date;

  @Prop({ required: true })
  updatedBy: string;

  @Prop({ required: true, default: new Date() })
  updatedAt: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
