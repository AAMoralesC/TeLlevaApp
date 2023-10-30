import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotiPasajeroPage } from './noti-pasajero.page';

describe('NotiPasajeroPage', () => {
  let component: NotiPasajeroPage;
  let fixture: ComponentFixture<NotiPasajeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotiPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
