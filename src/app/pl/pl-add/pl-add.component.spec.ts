import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlAddComponent } from './pl-add.component';

describe('PlAddComponent', () => {
  let component: PlAddComponent;
  let fixture: ComponentFixture<PlAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
