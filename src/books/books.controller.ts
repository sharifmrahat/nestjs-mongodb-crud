import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.booksService.findOne(_id);
  }

  @Put(':id')
  update(@Param('id') _id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(_id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.booksService.remove(_id);
  }
}
