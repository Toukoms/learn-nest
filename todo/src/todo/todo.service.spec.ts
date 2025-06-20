import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  // const todoRepository = {
  //   save: jest.fn(),
  //   find: jest.fn(),
  //   findOneBy: jest.fn(),
  //   delete: jest.fn(),
  // };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a todo', async () => {
    const todo = await service.create({ title: 'Test' });
    expect(todo).toBeDefined();
    expect(todo.title).toBe('Test');
    expect(todo.done).toBe(false);
  });

  it('should find all todos', async () => {
    const todos = await service.findAll();
    expect(todos).toBeDefined();
    expect(todos.length).toBe(1);
  });
});
