import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegNotasPage } from './reg-notas.page';

describe('RegNotasPage', () => {
  let component: RegNotasPage;
  let fixture: ComponentFixture<RegNotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegNotasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
