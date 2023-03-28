import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingContainerComponent } from './shooping-container.component';

describe('ShoopingContainerComponent', () => {
  let component: ShoopingContainerComponent;
  let fixture: ComponentFixture<ShoopingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoopingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
