import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskPageComponent } from './new-task-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('NewTaskPageComponent', () => {
  let component: NewTaskPageComponent;
  let fixture: ComponentFixture<NewTaskPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NewTaskPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
