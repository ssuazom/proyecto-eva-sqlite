import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CambiomonedaPageRoutingModule } from './cambiomoneda-routing.module';
import { CambiomonedaPage } from './cambiomoneda.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiomonedaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CambiomonedaPage]
})
export class CambiomonedaPageModule {}
