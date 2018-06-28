import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksViewPageComponent } from './tasks-view-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TasksViewPageComponent', () => {
  let component: TasksViewPageComponent;
  let fixture: ComponentFixture<TasksViewPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TasksViewPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksViewPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
