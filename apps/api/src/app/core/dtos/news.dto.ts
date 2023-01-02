import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ObjectId } from 'mongoose';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  
  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}

export class UpdateNewsDto extends PartialType(CreateNewsDto) {}

