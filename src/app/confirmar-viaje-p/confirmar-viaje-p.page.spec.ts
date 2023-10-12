import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarViajePPage } from './confirmar-viaje-p.page';

describe('ConfirmarViajePPage', () => {
  let component: ConfirmarViajePPage;
  let fixture: ComponentFixture<ConfirmarViajePPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarViajePPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
