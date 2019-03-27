import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  policy = {
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
  };

  constructor() { }

  ngOnInit() {
  }

}
