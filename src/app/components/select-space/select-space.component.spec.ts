import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpaceComponent } from './select-space.component';

describe('SelectSpaceComponent', () => {
  let component: SelectSpaceComponent;
  let fixture: ComponentFixture<SelectSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSpaceComponent]
    });
    fixture = TestBed.createComponent(SelectSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
