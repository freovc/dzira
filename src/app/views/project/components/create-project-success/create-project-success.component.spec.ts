import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectSuccessComponent } from './create-project-success.component';

describe('CreateProjectSuccessComponent', () => {
  let component: CreateProjectSuccessComponent;
  let fixture: ComponentFixture<CreateProjectSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
