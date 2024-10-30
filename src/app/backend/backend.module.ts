import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroPeatonComponent } from './registro-peaton/registro-peaton.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroPeatonComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
    
  ]
})
export class BackendModule { }
