import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('nest')
  getNest(): string {
    return 'Hello Nest!';
  }
}
