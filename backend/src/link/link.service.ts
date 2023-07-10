import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from '../typeorm';
import { LinkDto } from '../dto/create-link.dto';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link) private linksRepository: Repository<Link>,
  ) {}

  async getLinks(): Promise<Link[]> {
    return await this.linksRepository.find();
  }

  async create(dto: LinkDto) {
    const sameLink = await this.linksRepository.findOne({
      where: { title: dto.title },
    });

    if (sameLink) {
      throw theSameNameError();
    }

    const link = this.linksRepository.create(dto);
    return await this.linksRepository.save(link);
  }

  async getOne(id: number) {
    const link = await this.linksRepository.findOne({ where: { id } });
    if (link) {
      return await this.linksRepository.findOne({ where: { id } });
    } else {
      throw notFoundError();
    }
  }

  async update(id: number, dto: LinkDto) {
    const link = await this.linksRepository.findOne({ where: { id } });
    if (!link) {
      throw notFoundError();
    }

    Object.assign(link, dto);
    await this.linksRepository.save(link);
    return link;
  }

  async delete(id: number) {
    const link = await this.linksRepository.findOne({ where: { id } });
    if (link) {
      return await this.linksRepository.remove(link);
    } else {
      throw notFoundError();
    }
  }
}

function theSameNameError() {
  return new BadRequestException('The same name', {
    cause: new Error(),
    description: 'There is a link with the same name',
  });
}

function notFoundError() {
  return new NotFoundException('Not found', {
    cause: new Error(),
    description: 'No link with this current id',
  });
}
