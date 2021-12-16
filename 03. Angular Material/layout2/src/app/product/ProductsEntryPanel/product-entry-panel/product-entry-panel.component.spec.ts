import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEntryPanelComponent } from './product-entry-panel.component';

describe('ProductEntryPanelComponent', () => {
  let component: ProductEntryPanelComponent;
  let fixture: ComponentFixture<ProductEntryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEntryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEntryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
