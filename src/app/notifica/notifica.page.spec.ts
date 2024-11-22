import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificaPage } from './notifica.page';

describe('NotificaPage', () => {
  let component: NotificaPage;
  let fixture: ComponentFixture<NotificaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
