import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTerrestreComponent } from './incident-terrestre.component';

describe('IncidentTerrestreComponent', () => {
  let component: IncidentTerrestreComponent;
  let fixture: ComponentFixture<IncidentTerrestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncidentTerrestreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentTerrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
