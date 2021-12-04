import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonPageRoutingModule } from './pokemon-routing.module';
import { PokemonPage } from './pokemon.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [PokemonPage]
})
export class PokemonPageModule {}
