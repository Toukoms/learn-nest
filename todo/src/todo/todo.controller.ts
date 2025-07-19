import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAllTodos() {
    return this.prisma.todo.findMany();
  }
}
