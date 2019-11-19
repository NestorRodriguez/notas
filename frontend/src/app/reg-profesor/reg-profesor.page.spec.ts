import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProfesorPage } from './reg-profesor.page';

describe('RegProfesorPage', () => {
  let component: RegProfesorPage;
  let fixture: ComponentFixture<RegProfesorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegProfesorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
