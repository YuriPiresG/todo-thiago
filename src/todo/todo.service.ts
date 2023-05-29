import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { UpdateCompletion } from './dto/update-completion.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.save(createTodoDto);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.update(id, updateTodoDto);
  }

  updateCompletion(id: number, updateCompletion: UpdateCompletion) {
    return this.todoRepository.update(id, updateCompletion);
  }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
