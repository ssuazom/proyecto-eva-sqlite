import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ClimapokemonPageRoutingModule } from './climapokemon-routing.module';
import { ClimapokemonPage } from './climapokemon.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimapokemonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClimapokemonPage]
})
export class ClimapokemonPageModule {}
