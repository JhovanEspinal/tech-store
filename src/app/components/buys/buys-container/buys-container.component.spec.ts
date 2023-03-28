import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysContainerComponent } from './buys-container.component';

describe('BuysContainerComponent', () => {
  let component: BuysContainerComponent;
  let fixture: ComponentFixture<BuysContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuysContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuysContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
