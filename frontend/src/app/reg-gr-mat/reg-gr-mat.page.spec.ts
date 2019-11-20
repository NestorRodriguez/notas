import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegGrMatPage } from './reg-gr-mat.page';

describe('RegGrMatPage', () => {
  let component: RegGrMatPage;
  let fixture: ComponentFixture<RegGrMatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegGrMatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegGrMatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
