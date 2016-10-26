import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from '../product/product.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products',  component: ProductComponent },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class CustomerInformationRoutingModule { }