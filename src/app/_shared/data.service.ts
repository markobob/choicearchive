import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchTerm;
  activePolicy;

  constructor() { }

  getResults(n) {
    return this.fabricateResults(n);
  }

  fabricateResults(n) {
    faker.locale = 'en_GB';
    const data = [];
    for (let i = 0; i < n; i++) {
      data.push(
        {
          prefix: faker.name.prefix(),
          customerName: faker.name.findName(),
          policyNumber: faker.finance.account(),
          startDate: faker.date.past(),
          endDate: faker.date.future(),
          job: faker.name.jobDescriptor(),
          phone: faker.phone.phoneNumber(),
          address: {
            street: faker.address.streetAddress(),
            county: faker.address.county(),
            zipCode: faker.address.zipCode()
          },
          car: {
            color: faker.commerce.color(),
            make: faker.commerce.productName(),
            value: faker.commerce.price()
          }
        }
      );
    }
    return data;
  }

  fabricateHistory(n) {
    faker.locale = 'en_GB';
    const data = [];
    for (let i = 0; i < n; i++) {
      data.push(
        {
          date: faker.date.past(),
          value: faker.date.past(),
          transaction: faker.finance.transactionType(),
          amount: faker.finance.amount(),
          narrative: faker.lorem.sentence()
        }
      );
    }
    return data;
  }

}
