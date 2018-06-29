import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditPageComponent } from './task-edit-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TaskEditPageComponent', () => {
  let component: TaskEditPageComponent;
  let fixture: ComponentFixture<TaskEditPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TaskEditPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEditPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
