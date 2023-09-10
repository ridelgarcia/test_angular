import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'activate_account',
        pathMatch: 'full',
        component:ActivateAccountComponent
      },
      {
        path: 'change_password',
        component: ChangePasswordComponent,
        
      },     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}