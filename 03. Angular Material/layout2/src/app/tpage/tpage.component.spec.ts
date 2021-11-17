import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpageComponent } from './tpage.component';

describe('TpageComponent', () => {
  let component: TpageComponent;
  let fixture: ComponentFixture<TpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
