import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysTableComponent } from './buys-table.component';

describe('BuysTableComponent', () => {
  let component: BuysTableComponent;
  let fixture: ComponentFixture<BuysTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuysTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuysTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
