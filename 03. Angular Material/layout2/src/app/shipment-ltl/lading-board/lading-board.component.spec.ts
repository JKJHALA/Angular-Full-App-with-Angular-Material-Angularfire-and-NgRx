import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingBoardComponent } from './lading-board.component';

describe('LadingBoardComponent', () => {
  let component: LadingBoardComponent;
  let fixture: ComponentFixture<LadingBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadingBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
