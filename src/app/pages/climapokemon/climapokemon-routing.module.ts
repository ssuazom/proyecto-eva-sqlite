import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimapokemonPage } from './climapokemon.page';

const routes: Routes = [
  {
    path: '',
    component: ClimapokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimapokemonPageRoutingModule {}
