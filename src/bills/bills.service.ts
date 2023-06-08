import { Injectable } from '@nestjs/common';
import { Bill } from './bills.entity';

@Injectable()
export class BillsService {
  private bills: Bill[];
  private reference: Date;
  private expDay: string;
  private venDay: string;
  private date: string;

  constructor() {
    this.reference = new Date();
    this.date = new Date().toISOString();
    this.expDay = this.reference.toUTCString();
    this.reference.setDate(this.reference.getDate() + 3);
    this.venDay = this.reference.toUTCString();
    this.bills = [
      {
        id: 1,
        adviser: {
          id: 1,
          name: 'John',
          lastName: 'Doe',
          email: 'email@email.com',
          createdAt: this.date,
          updatedAt: this.date,
        },
        institucion: 'Universidad de los Andes',
        dateExp: this.expDay,
        dateEnd: this.venDay,
        price: 1000000,
        student: {
          id: 1,
          name: 'John',
          lastName: 'Doe',
          phoneNumber: '123456789',
          email: 'email@example.com',
          createdAt: this.date,
          updatedAt: this.date,
        },
        type: 'Matricula',
        currencyDest: 'COP',
        currencyPayment: 'COP',
        createdAt: this.expDay,
        updatedAt: this.expDay,
      },
      {
        id: 2,
        adviser: {
          id: 2,
          name: 'John',
          lastName: 'Doe',
          email: 'email@email.com',
          createdAt: this.date,
          updatedAt: this.date,
        },
        institucion: 'Universidad de los Andes',
        dateExp: this.expDay,
        dateEnd: this.venDay,
        price: 1000000,
        student: {
          id: 2,
          name: 'John',
          lastName: 'Doe',
          phoneNumber: '123456789',
          email: 'email@example.com',
          createdAt: this.date,
          updatedAt: this.date,
        },
        type: 'Matricula',
        currencyDest: 'COP',
        currencyPayment: 'COP',
        createdAt: this.expDay,
        updatedAt: this.expDay,
      },
      {
        id: 3,
        adviser: {
          id: 3,
          name: 'John',
          lastName: 'Doe',
          email: 'email@email.com',
          createdAt: this.date,
          updatedAt: this.date,
        },
        institucion: 'Universidad de los Andes',
        dateExp: this.expDay,
        dateEnd: this.venDay,
        price: 1000000,
        student: {
          id: 3,
          name: 'John',
          lastName: 'Doe',
          phoneNumber: '123456789',
          email: 'email@example.com',
          createdAt: this.date,
          updatedAt: this.date,
        },
        type: 'Matricula',
        currencyDest: 'COP',
        currencyPayment: 'COP',
        createdAt: this.expDay,
        updatedAt: this.expDay,
      },
    ];
  }

  findAll() {
    return this.bills;
  }

  findOneById(id: number) {
    return this.bills.find((bill) => bill.id === id);
  }
}
