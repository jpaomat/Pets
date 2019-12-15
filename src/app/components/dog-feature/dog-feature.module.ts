import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogFeatureRoutingModule } from './dog-feature-routing.module';
import { ListDogsComponent } from './list-dogs/list-dogs.component';


@NgModule({
  declarations: [ListDogsComponent],
  imports: [
    CommonModule,
    DogFeatureRoutingModule
  ]
})
export class DogFeatureModule { }
