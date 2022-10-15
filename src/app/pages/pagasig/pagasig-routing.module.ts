import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagasigPage } from './pagasig.page';

const routes: Routes = [
  {
    path: '',
    component: PagasigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagasigPageRoutingModule {}
