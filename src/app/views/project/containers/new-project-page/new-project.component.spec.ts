import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProjectPageComponent } from './new-project-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('NewProjectComponent', () => {
  let component: NewProjectPageComponent;
  let fixture: ComponentFixture<NewProjectPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NewProjectPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProjectPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
