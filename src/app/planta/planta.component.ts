import { Component, OnInit } from '@angular/core';
import { PlantaService } from './planta.service';
import { Planta } from './Planta';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  plantas: Array<Planta> = [];

  constructor(private plantaService: PlantaService) { }

  getPlantasLista() {
    this.plantaService.getPlantas().subscribe(plantas => {
      this.plantas = plantas;
      console.log(this.plantas);
    });
  }

  ngOnInit() {
    this.getPlantasLista();
  }

}
