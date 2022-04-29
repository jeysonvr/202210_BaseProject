import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantaComponent } from './planta/planta.component';

const routes: Routes = [
  { path: '**', component: PlantaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
