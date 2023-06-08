import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Adviser } from 'src/adviser/adviser.entity';
import { Student } from 'src/students/student.entity';
import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Bill {
  @PrimaryColumn()
  @Field((type) => Int)
  id: number;

  @OneToOne((type) => Adviser, (adviser) => adviser.id)
  @Field((type) => Adviser)
  adviser: Adviser;

  @Column()
  @Field()
  institucion: string;

  @Column()
  @Field()
  dateExp: string;

  @Column()
  @Field()
  dateEnd: string;

  @Column()
  @Field((type) => Int)
  price: number;

  @OneToOne((type) => Student, (student) => student.id)
  @Field((type) => Student)
  student: Student;

  @Column()
  @Field()
  type: string;

  @Column()
  @Field()
  currencyDest: string;

  @Column()
  @Field()
  currencyPayment: string;

  @Column()
  @Field()
  createdAt: string;

  @Column()
  @Field()
  updatedAt: string;
}
