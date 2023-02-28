import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagMaterialsComponent } from './tag-materials.component';

describe('TagMaterialsComponent', () => {
  let component: TagMaterialsComponent;
  let fixture: ComponentFixture<TagMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
