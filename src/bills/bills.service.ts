import { Injectable } from '@nestjs/common';
import { Bill } from './bills.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BillsService {
  constructor(
    @InjectRepository(Bill) private billRepository: Repository<Bill>,
  ) {}

  async findAll(): Promise<Bill[]> {
    return await this.billRepository.find();
  }

  findOneById(id: number) {
    return null;
  }
}
