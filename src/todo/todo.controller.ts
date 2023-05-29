import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { UpdateCompletion } from './dto/update-completion.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Put('/completion/:id')
  updateCompletion(
    @Param('id') id: string,
    @Body() updateCompletion: UpdateCompletion,
  ) {
    return this.todoService.updateCompletion(+id, updateCompletion);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
