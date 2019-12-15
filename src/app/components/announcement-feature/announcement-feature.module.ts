import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementFeatureRoutingModule } from './announcement-feature-routing.module';
import { AdoptPetComponent } from './adopt-pet/adopt-pet.component';


@NgModule({
  declarations: [AdoptPetComponent],
  imports: [
    CommonModule,
    AnnouncementFeatureRoutingModule
  ]
})
export class AnnouncementFeatureModule { }
