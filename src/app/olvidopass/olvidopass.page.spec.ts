import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidopassPage } from './olvidopass.page';

describe('OlvidopassPage', () => {
  let component: OlvidopassPage;
  let fixture: ComponentFixture<OlvidopassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvidopassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
