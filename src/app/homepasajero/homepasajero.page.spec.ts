import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepasajeroPage } from './homepasajero.page';

describe('HomepasajeroPage', () => {
  let component: HomepasajeroPage;
  let fixture: ComponentFixture<HomepasajeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomepasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
