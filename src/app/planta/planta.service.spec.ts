/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { PlantaService } from './planta.service';

describe('Service: Planta', () => {
  let service: PlantaService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService]
    });
    service = TestBed.inject(PlantaService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should create', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
