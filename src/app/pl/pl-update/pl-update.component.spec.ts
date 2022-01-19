import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlUpdateComponent } from './pl-update.component';

describe('PlUpdateComponent', () => {
  let component: PlUpdateComponent;
  let fixture: ComponentFixture<PlUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
