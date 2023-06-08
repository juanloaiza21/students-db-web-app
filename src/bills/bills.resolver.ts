import { Args, Resolver } from '@nestjs/graphql';
import { BillsService } from './bills.service';
import { Query } from '@nestjs/graphql';
import { Bill } from './bills.entity';

@Resolver()
export class BillsResolver {
  constructor(private billsService: BillsService) {}

  @Query((returns) => [Bill])
  bills() {
    return this.billsService.findAll();
  }

  @Query((returns) => Bill)
  getBill(@Args('id', { type: () => Number }) id: number) {
    return this.billsService.findOneById(id);
  }
}
