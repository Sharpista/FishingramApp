import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardEsquerdoComponent } from './components/card-esquerdo/card-esquerdo.component';



@NgModule({
  declarations: [
    InputFieldComponent,
    CardEsquerdoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    InputFieldComponent,
    CardEsquerdoComponent,
  ],

})
export class SharedModule { }
