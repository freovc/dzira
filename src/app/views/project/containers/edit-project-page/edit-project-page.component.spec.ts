import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectPageComponent } from './edit-project-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('EditProjectPageComponent', () => {
  let component: EditProjectPageComponent;
  let fixture: ComponentFixture<EditProjectPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ EditProjectPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
