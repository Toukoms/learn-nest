import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const newTodo = new Todo();
    newTodo.title = createTodoDto.title;
    return this.todoRepository.save(newTodo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: string) {
    return this.todoRepository.findOneBy({ id });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) return null;
    todo.done = updateTodoDto.done;
    return this.todoRepository.save(todo);
  }

  remove(id: string) {
    return this.todoRepository.delete(id);
  }
}
