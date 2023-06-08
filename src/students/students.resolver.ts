import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Query } from '@nestjs/graphql';
import { Student } from './student.entity';
import { CreateStudentInput } from './dto/create-student.input';

@Resolver()
export class StudentsResolver {
  constructor(private studentService: StudentsService) {}

  @Query((returns) => [Student])
  students() {
    return this.studentService.findAll();
  }

  @Query((returns) => Student)
  getStudent(@Args('id', { type: () => Number }) id: number) {
    return null;
  }

  @Mutation((returns) => Student)
  createStudent(@Args('studentInput') studentInput: CreateStudentInput) {
    return this.studentService.createStudent(studentInput);
  }
}
