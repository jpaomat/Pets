import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', loadChildren:'./components/home-feature/home-feature.module#HomeFeatureModule'},
  {path:'', loadChildren:'./components/dog-feature/dog-feature.module#DogFeatureModule'},
  {path:'', loadChildren:'./components/cat-feature/cat-feature.module#CatFeatureModule'},
  {path:'', loadChildren:'./components/announcement-feature/announcement-feature.module#AnnouncementFeatureModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
