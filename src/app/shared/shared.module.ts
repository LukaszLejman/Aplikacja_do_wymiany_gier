import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentComponent } from './list-component/list-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListComponentComponent
  ],
  declarations: [ListComponentComponent]
})
export class SharedModule { }
