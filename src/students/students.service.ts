import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './dto/create-student.input';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  createStudent(student: CreateStudentInput): Promise<Student> {
    {
      const s = {
        ...student,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      const newStudent = this.studentRepository.create(s);
      return this.studentRepository.save(newStudent);
    }
  }
}
