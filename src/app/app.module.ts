import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomerInformationModule } from './customer-information/customer-information.module';
import { ProductModule } from './product/product.module';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
      MaterialModule.forRoot(),
    CustomerInformationModule,
      ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
