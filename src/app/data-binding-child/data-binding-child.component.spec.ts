import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingChildComponent } from './data-binding-child.component';

describe('DataBindingChildComponent', () => {
  let component: DataBindingChildComponent;
  let fixture: ComponentFixture<DataBindingChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
