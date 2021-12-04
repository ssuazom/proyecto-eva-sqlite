import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'climapokemon',
    loadChildren: () => import('./pages/climapokemon/climapokemon.module').then( m => m.ClimapokemonPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cambiomoneda',
    loadChildren: () => import('./pages/cambiomoneda/cambiomoneda.module').then( m => m.CambiomonedaPageModule)
  },
  {
    path: 'listado',
    loadChildren: () => import('./pages/listado/listado.module').then( m => m.ListadoPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pages/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'modificar/:id',
    loadChildren: () => import('./pages/modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
