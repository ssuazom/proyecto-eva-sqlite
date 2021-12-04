import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiomonedaPage } from './cambiomoneda.page';

const routes: Routes = [
  {
    path: '',
    component: CambiomonedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiomonedaPageRoutingModule {}
