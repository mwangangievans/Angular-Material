import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCompComponent } from './select-comp.component';

describe('SelectCompComponent', () => {
  let component: SelectCompComponent;
  let fixture: ComponentFixture<SelectCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
