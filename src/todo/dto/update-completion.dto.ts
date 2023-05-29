/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateCompletion extends PartialType(CreateTodoDto) {
  @IsBoolean()
  @IsNotEmpty()
  completed: boolean;
}
