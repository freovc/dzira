import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogPageComponent } from './backlog-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('BacklogPageComponent', () => {
  let component: BacklogPageComponent;
  let fixture: ComponentFixture<BacklogPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ BacklogPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
