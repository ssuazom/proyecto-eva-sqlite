import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModificarPageRoutingModule } from './modificar-routing.module';
import { ModificarPage } from './modificar.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [ModificarPage]
})
export class ModificarPageModule {}
