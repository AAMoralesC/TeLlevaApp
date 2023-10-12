import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarViajeChPage } from './confirmar-viaje-ch.page';

describe('ConfirmarViajeChPage', () => {
  let component: ConfirmarViajeChPage;
  let fixture: ComponentFixture<ConfirmarViajeChPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmarViajeChPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
