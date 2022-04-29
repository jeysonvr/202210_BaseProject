/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { PlantaComponent } from '../planta.component';

describe('PlantaComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlantaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer correctly', () => {
    const footer = debug.query(By.css('footer'));
    expect(footer.nativeElement.textContent).toContain('Contact us');
  });
});
