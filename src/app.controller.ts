import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('hello')
  getHello() {
    return { message: 'Hello from NestJS API!' };
  }

  @Get('users')
  getUsers() {
    return [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
  }
}
