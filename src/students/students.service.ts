import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  private date;
  private students: Student[];

  constructor() {
    this.date = new Date().toISOString();
    this.students = [
      {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        phoneNumber: '123456789',
        email: 'email@example.com',
        createdAt: this.date,
        updatedAt: this.date,
      },
      {
        id: 2,
        name: 'John',
        lastName: 'Doe',
        phoneNumber: '123456789',
        email: 'email@example.com',
        createdAt: this.date,
        updatedAt: this.date,
      },
      {
        id: 3,
        name: 'John',
        lastName: 'Doe',
        phoneNumber: '123456789',
        email: 'email@example.com',
        createdAt: this.date,
        updatedAt: this.date,
      },
    ];
  }

  findAll() {
    return this.students;
  }

  findOneById(id: number) {
    return this.students.find((student) => student.id === id);
  }
}
