import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemFormComponentComponent } from './add-item-form-component.component';

describe('AddItemFormComponentComponent', () => {
  let component: AddItemFormComponentComponent;
  let fixture: ComponentFixture<AddItemFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
