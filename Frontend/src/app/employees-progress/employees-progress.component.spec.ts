import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesProgressComponent } from './employees-progress.component';

describe('EmployeesProgressComponent', () => {
  let component: EmployeesProgressComponent;
  let fixture: ComponentFixture<EmployeesProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
