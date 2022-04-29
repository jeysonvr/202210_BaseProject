import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantaComponent } from './planta.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListarPlantaComponent } from './listarPlanta/listarPlanta.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    PlantaComponent,
    ListarPlantaComponent,
  ],
  exports: [
    PlantaComponent,
  ]
})
export class PlantaModule { }
