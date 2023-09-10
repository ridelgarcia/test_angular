import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddCategoryComponent } from './add-category/add-category.component';
import { SearchCategoryComponent } from './search-category/search-category.component';
const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'add-category',
        pathMatch: 'full',
        component:AddCategoryComponent
      },
      {
        path: 'search-category',
        component: SearchCategoryComponent,
        
      },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}