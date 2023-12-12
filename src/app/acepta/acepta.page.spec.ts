import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AceptaPage } from './acepta.page';

describe('AceptaPage', () => {
  let component: AceptaPage;
  let fixture: ComponentFixture<AceptaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AceptaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
