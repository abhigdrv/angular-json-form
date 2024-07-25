import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsonFormLibComponent } from './angular-json-form-lib.component';

describe('AngularJsonFormLibComponent', () => {
  let component: AngularJsonFormLibComponent;
  let fixture: ComponentFixture<AngularJsonFormLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularJsonFormLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularJsonFormLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
