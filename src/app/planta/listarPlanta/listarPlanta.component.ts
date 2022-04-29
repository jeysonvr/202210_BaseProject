import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Planta } from '../Planta';

@Component({
  selector: 'app-listarPlanta',
  templateUrl: './listarPlanta.component.html',
  styleUrls: ['./listarPlanta.component.css']
})
export class ListarPlantaComponent implements OnInit {

  @Input() plantas: Array<Planta> = [];

  totalPlantasInterior = 0;
  totalPlantasExterior = 0;

  constructor() {
    console.log('Proceso:', this.plantas);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    this.totalPlantasInterior = this.plantas.filter(planta => planta.tipo === "Interior").length;
    this.totalPlantasExterior = this.plantas.filter(planta => planta.tipo === "Exterior").length;
  }

}
