import { Field, Int } from '@nestjs/graphql';

class Bills {
  @Field((type) => Int)
  id: number;
  @Field((type) => Int)
  idAsesor: number;
  @Field()
  institucion: string;
  @Field((type) => Date)
  dateExp: Date;
  @Field((type) => Date)
  dateEnd: Date;
  @Field((type) => Int)
  price: number;
  @Field((type) => Int)
  idStudent: number;
  @Field()
  type: string;
  @Field()
  currencyDest: string;
  @Field()
  currencyPayment: string;
  @Field((type) => Date)
  createdAt: Date;
  @Field((type) => Date)
  updatedAt: Date;
}
