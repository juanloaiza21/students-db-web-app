import { Args, Resolver } from '@nestjs/graphql';
import { StudentsService } from './students.service';
import { Query } from '@nestjs/graphql';
import { Student } from './student.entity';

@Resolver()
export class StudentsResolver {
  constructor(private studentService: StudentsService) {}

  @Query((returns) => [Student])
  students() {
    return this.studentService.findAll();
  }

  @Query((returns) => Student)
  getStudent(@Args('id', { type: () => Number }) id: number) {
    return this.studentService.findOneById(id);
  }
}
