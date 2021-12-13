import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEsquerdoComponent } from './components/card-esquerdo/card-esquerdo.component';
import { PhotoAlbumsCardsComponent } from './components/photo-albums-cards/photo-albums-cards.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    CardEsquerdoComponent,
    PhotoAlbumsCardsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    InputFieldComponent,
    CardEsquerdoComponent,
    PhotoAlbumsCardsComponent
  ],

})
export class SharedModule { }
