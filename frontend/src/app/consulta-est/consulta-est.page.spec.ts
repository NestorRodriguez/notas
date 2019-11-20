import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEstPage } from './consulta-est.page';

describe('ConsultaEstPage', () => {
  let component: ConsultaEstPage;
  let fixture: ComponentFixture<ConsultaEstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
