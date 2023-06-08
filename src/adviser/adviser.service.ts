import { Injectable } from '@nestjs/common';
import { Adviser } from './adviser.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdviserService {
  constructor(
    @InjectRepository(Adviser) private adviserRepository: Repository<Adviser>,
  ) {}

  async findAll(): Promise<Adviser[]> {
    return await this.adviserRepository.find();
  }

  findOneById(id: number) {
    return null;
  }
}
