import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagasigPageRoutingModule } from './pagasig-routing.module';

import { PagasigPage } from './pagasig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagasigPageRoutingModule
  ],
  declarations: [PagasigPage]
})
export class PagasigPageModule {}
