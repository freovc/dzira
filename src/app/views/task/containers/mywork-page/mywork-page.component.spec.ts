import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyworkPageComponent } from './mywork-page.component';
import { Store, StoreModule } from '@ngrx/store';

describe('MyworkPageComponent', () => {
  let component: MyworkPageComponent;
  let fixture: ComponentFixture<MyworkPageComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ MyworkPageComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyworkPageComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
