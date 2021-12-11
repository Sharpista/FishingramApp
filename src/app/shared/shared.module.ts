import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEsquerdoComponent } from './components/card-esquerdo/card-esquerdo.component';
import { FeedPostsComponent } from './components/feed-posts/feed-posts.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    CardEsquerdoComponent,
    FeedPostsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    InputFieldComponent,
    CardEsquerdoComponent,
    FeedPostsComponent
  ],

})
export class SharedModule { }
