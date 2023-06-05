import { Field, Int } from '@nestjs/graphql';

class Adviser {
  @Field((type) => Int)
  id: number;
  @Field()
  name: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field((type) => Date)
  createdAt: Date;
  @Field((type) => Date)
  updatedAt: Date;
}
