import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyseSpatialPage } from './analyse-spatial.page';

describe('AnalyseSpatialPage', () => {
  let component: AnalyseSpatialPage;
  let fixture: ComponentFixture<AnalyseSpatialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseSpatialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
