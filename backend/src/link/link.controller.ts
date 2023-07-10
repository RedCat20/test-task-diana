import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LinkService } from './link.service';
import { LinkDto } from '../dto/create-link.dto';

@Controller('/links')
export class LinkController {
  constructor(private readonly linkService: LinkService) {}

  @Get()
  getAll() {
    return this.linkService.getLinks();
  }

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() dto: LinkDto) {
    return this.linkService.create(dto);
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return this.linkService.getOne(id);
  }

  @UsePipes(ValidationPipe)
  @Put('/:id')
  update(@Param('id') id: number, @Body() dto: LinkDto) {
    return this.linkService.update(id, dto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.linkService.delete(id);
  }
}
