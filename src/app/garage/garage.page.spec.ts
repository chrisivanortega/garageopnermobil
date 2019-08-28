import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragePage } from './garage.page';

describe('GaragePage', () => {
  let component: GaragePage;
  let fixture: ComponentFixture<GaragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
