import { Field, Int, ObjectType } from '@nestjs/graphql';

export class Student {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  lastName: string;
  @Field()
  phoneNumber: string;
  @Field()
  email: string;
  @Field((type) => Date)
  createdAt: Date;
  @Field((type) => Date)
  updatedAt: Date;
}
