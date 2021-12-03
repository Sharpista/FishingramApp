import { ProfileModule } from './../profile/profile.module';
import { InputFieldComponent } from './../shared/components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { FormPostComponent } from './form-post/form-post.component';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    FormPostComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProfileModule
  ],
  exports:[
    FormPostComponent
  ]
})
export class PostModule { }
