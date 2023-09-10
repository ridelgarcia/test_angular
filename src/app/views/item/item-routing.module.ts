import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddItemComponent } from './add-item/add-item.component';
import { SearchItemComponent } from './search-item/search-item.component';
const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'add-item',
        pathMatch: 'full',
        component:AddItemComponent
      },
      {
        path: 'search-item',
        component: SearchItemComponent,
        
      },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}