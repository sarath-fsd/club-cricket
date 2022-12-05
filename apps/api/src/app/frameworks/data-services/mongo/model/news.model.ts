import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NewsDocument = News & Document;

@Schema()
export class News {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true})
  image: string;

  @Prop({ required: true})
  url: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);