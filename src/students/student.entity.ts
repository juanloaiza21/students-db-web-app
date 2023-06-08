import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
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
  @Field()
  createdAt: string;
  @Field()
  updatedAt: string;
}
