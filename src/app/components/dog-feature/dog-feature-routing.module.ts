import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDogsComponent } from './list-dogs/list-dogs.component';


const routes: Routes = [
  {path:'dogs', component:ListDogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogFeatureRoutingModule { }
