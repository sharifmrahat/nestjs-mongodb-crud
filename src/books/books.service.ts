import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDocument } from 'src/schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll() {
    return this.bookModel.find();
  }

  async findOne(_id: string) {
    return this.bookModel.findOne({ _id });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(_id: string, _updateBookDto: UpdateBookDto) {
    return this.bookModel.updateOne({ _id }, { $set: { ..._updateBookDto } });
  }

  async remove(_id: string) {
    return this.bookModel.deleteOne({ _id });
  }
}
