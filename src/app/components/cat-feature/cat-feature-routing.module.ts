import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCatsComponent } from './list-cats/list-cats.component';


const routes: Routes = [
  {path:'cats', component:ListCatsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatFeatureRoutingModule { }
