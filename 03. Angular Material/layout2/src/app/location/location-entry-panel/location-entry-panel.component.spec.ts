import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEntryPanelComponent } from './location-entry-panel.component';

describe('LocationEntryPanelComponent', () => {
  let component: LocationEntryPanelComponent;
  let fixture: ComponentFixture<LocationEntryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationEntryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationEntryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
