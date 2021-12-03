import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CardProfileComponent } from './card-profile/card-profile.component';
import { CardProfileFollowingComponent } from './card-profile-following/card-profile-following.component';
import { FormCadastroProfileComponent } from './form-cadastro-profile/form-cadastro-profile.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CardProfileComponent,
    CardProfileFollowingComponent,
    FormCadastroProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[CardProfileComponent, CardProfileFollowingComponent]
})
export class ProfileModule { }
