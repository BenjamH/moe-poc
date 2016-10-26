import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerInformationComponent }  from './customer-information/customer-information.component';
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'customer-information', component: CustomerInformationComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}