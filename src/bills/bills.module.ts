import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsResolver } from './bills.resolver';

@Module({
  providers: [BillsService, BillsResolver]
})
export class BillsModule {}
