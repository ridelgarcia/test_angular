import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  AvatarModule,
  DropdownModule,
  SpinnerModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';






@NgModule({
  declarations: [
    ActivateAccountComponent,
    ChangePasswordComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CardModule,
    AvatarModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ]
})
export class UserModule { }

