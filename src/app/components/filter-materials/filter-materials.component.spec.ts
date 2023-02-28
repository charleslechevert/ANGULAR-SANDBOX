import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMaterialsComponent } from './filter-materials.component';

describe('FilterMaterialsComponent', () => {
  let component: FilterMaterialsComponent;
  let fixture: ComponentFixture<FilterMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
