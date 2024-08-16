import { Controller, Get } from '@nestjs/common';

@Controller('coba')
export class CobaController {
  @Get()
  findAll(): string {
    return 'ini controller coba';
  }
}
