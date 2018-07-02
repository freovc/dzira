import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardPageComponent } from './taskboard-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TaskboardPageComponent', () => {
  let component: TaskboardPageComponent;
  let fixture: ComponentFixture<TaskboardPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TaskboardPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboardPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
