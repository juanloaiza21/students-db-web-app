import { Injectable } from '@nestjs/common';
import { Adviser } from './adviser.entity';

@Injectable()
export class AdviserService {
  private date;
  private advisers: Adviser[];

  constructor() {
    this.date = new Date().toISOString();
    this.advisers = [
      {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        email: 'email@email.com',
        createdAt: this.date,
        updatedAt: this.date,
      },
      {
        id: 2,
        name: 'John',
        lastName: 'Doe',
        email: 'email@email.com',
        createdAt: this.date,
        updatedAt: this.date,
      },
      {
        id: 3,
        name: 'John',
        lastName: 'Doe',
        email: 'email@email.com',
        createdAt: this.date,
        updatedAt: this.date,
      },
    ];
  }

  findAll() {
    return this.advisers;
  }

  findOneById(id: number) {
    return this.advisers.find((adviser) => adviser.id === id);
  }
}
