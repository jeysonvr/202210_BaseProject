/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import faker from '@faker-js/faker';

import { ListarPlantaComponent } from './listarPlanta.component';
import { Planta } from '../Planta';

describe('ListarPlantaComponent', () => {
  let component: ListarPlantaComponent;
  let fixture: ComponentFixture<ListarPlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPlantaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlantaComponent);
    component = fixture.componentInstance;

    const tipos = ['Interior', 'Exterior'];
    component.plantas = [];
    for (let index = 0; index < 3; index++) {
      component.plantas.push(
        new Planta(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          tipos[Math.round(Math.random())],
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
        )
      );
    };

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table correctly', () => {
    const header = debug.queryAll(By.css('thead tr'));
    expect(header.length).toBe(1);

    expect(header[0].queryAll(By.css('th'))[0].nativeElement.textContent).toEqual('#');
    expect(header[0].queryAll(By.css('th'))[1].nativeElement.textContent).toEqual('Nombre común');
    expect(header[0].queryAll(By.css('th'))[2].nativeElement.textContent).toEqual('Tipo');
    expect(header[0].queryAll(By.css('th'))[3].nativeElement.textContent).toEqual('Clima');

    const rows = debug.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });

  it('should include "plantas interior"', () => {
    const text = `Total plantas de interior:`;
    expect(debug.query(By.css('.plantasInterior')).nativeElement.textContent).toContain(text);
  });

  it('should include "plantas exterior"', () => {
    const text = `Total plantas de exterior:`;
    expect(debug.query(By.css('.plantasExterior')).nativeElement.textContent).toContain(text);
  });
});
