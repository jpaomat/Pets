import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatFeatureRoutingModule } from './cat-feature-routing.module';
import { ListCatsComponent } from './list-cats/list-cats.component';


@NgModule({
  declarations: [ListCatsComponent],
  imports: [
    CommonModule,
    CatFeatureRoutingModule
  ]
})
export class CatFeatureModule { }
