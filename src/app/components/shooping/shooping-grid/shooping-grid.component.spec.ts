import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingGridComponent } from './shooping-grid.component';

describe('ShoopingGridComponent', () => {
  let component: ShoopingGridComponent;
  let fixture: ComponentFixture<ShoopingGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoopingGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
