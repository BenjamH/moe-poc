import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CustomerInformationComponent } from './customer-information.component';
import { ProductComponent } from '../product/product.component';
import { CustomerInformationRoutingModule } from './customer-information-routing.module';
import { StoreService } from '../services/store/store.service.ts';

@NgModule({
  imports: [
    CommonModule,
      FormsModule,
    CustomerInformationRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [CustomerInformationComponent],
  providers: [StoreService],
  exports: [
      CustomerInformationComponent
  ]
})
export class CustomerInformationModule { }
