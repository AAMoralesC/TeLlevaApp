import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomechoferPage } from './homechofer.page';

describe('HomechoferPage', () => {
  let component: HomechoferPage;
  let fixture: ComponentFixture<HomechoferPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomechoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
