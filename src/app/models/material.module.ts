import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule
    
  ],
  exports : [
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],

})
export class MaterialModule { }
