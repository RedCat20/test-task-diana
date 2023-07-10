import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api')
  getHello(): string {
    return 'Hello world!';
  }

  @Get()
  getLinks(): any[] {
    return this.appService.getLinks();
  }
}
