import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingBoardTLComponent } from './lading-board-tl.component';

describe('LadingBoardTLComponent', () => {
  let component: LadingBoardTLComponent;
  let fixture: ComponentFixture<LadingBoardTLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadingBoardTLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadingBoardTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
