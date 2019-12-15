import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFeatureRoutingModule } from './home-feature-routing.module';
import { IntroductionSectionComponent } from './introduction-section/introduction-section.component';
import { PicturesSectionComponent } from './pictures-section/pictures-section.component';
import { TeamSectionComponent } from './team-section/team-section.component';


@NgModule({
  declarations: [
    IntroductionSectionComponent, 
    PicturesSectionComponent, 
    TeamSectionComponent
  ],
  imports: [
    CommonModule,
    HomeFeatureRoutingModule
  ]
})
export class HomeFeatureModule { }
