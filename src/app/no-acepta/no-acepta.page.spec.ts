import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoAceptaPage } from './no-acepta.page';

describe('NoAceptaPage', () => {
  let component: NoAceptaPage;
  let fixture: ComponentFixture<NoAceptaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoAceptaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
