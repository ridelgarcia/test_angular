import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { SearchItemComponent } from './search-item/search-item.component';

import { ItemsRoutingModule } from './item-routing.module';

@NgModule({
  declarations: [    
    AddItemComponent,
    SearchItemComponent
  ],
  imports: [
    ItemsRoutingModule,
    CommonModule
  ]
})
export class ItemModule { }
