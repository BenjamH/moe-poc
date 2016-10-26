import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { StoreService } from '../services/store/store.service.ts'


import

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {

  constructor(
      private router: Router,
      private service: StoreService
  ) { }

  ngOnInit() {
  }

  goToProducts() {
    this.router.navigate(['products'])
  }

}
