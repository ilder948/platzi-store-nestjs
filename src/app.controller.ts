import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Ildebrando';
  }

  @Get('nuevo')
  newEndPoint() {
    return 'Soy Nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con / nuevo /';
  }
}
