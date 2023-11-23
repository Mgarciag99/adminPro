import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncrementatorComponent } from './incrementator/incrementator.component';


@NgModule({
  exports:[
    IncrementatorComponent
  ],
  declarations: [
    IncrementatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
