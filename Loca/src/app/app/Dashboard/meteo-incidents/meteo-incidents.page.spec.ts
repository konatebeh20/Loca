import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeteoIncidentsPage } from './meteo-incidents.page';

describe('MeteoIncidentsPage', () => {
  let component: MeteoIncidentsPage;
  let fixture: ComponentFixture<MeteoIncidentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteoIncidentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
