import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnouncementFeatureRoutingModule } from './announcement-feature-routing.module';
import { AdoptPetComponent } from './adopt-pet/adopt-pet.component';
import { FormPetComponent } from './form-pet/form-pet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [AdoptPetComponent, FormPetComponent],
  imports: [
    CommonModule,
    AnnouncementFeatureRoutingModule,
    NgbModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AnnouncementFeatureModule { }
