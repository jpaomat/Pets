import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionSectionComponent } from './introduction-section/introduction-section.component';


const routes: Routes = [
  {path:'', component:IntroductionSectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeFeatureRoutingModule { }
