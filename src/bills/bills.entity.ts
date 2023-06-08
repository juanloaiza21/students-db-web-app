import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Adviser } from 'src/adviser/adviser.entity';
import { Student } from 'src/students/student.entity';

@ObjectType()
export class Bill {
  @Field((type) => Int)
  id: number;
  @Field((type) => Adviser)
  adviser: Adviser;
  @Field()
  institucion: string;
  @Field()
  dateExp: string;
  @Field()
  dateEnd: string;
  @Field((type) => Int)
  price: number;
  @Field((type) => Student)
  student: Student;
  @Field()
  type: string;
  @Field()
  currencyDest: string;
  @Field()
  currencyPayment: string;
  @Field()
  createdAt: string;
  @Field()
  updatedAt: string;
}
