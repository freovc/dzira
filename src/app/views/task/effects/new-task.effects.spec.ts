import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NewTaskEffects } from './new-task.effects';

describe('NewTaskService', () => {
  let actions$: Observable<any>;
  let effects: NewTaskEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewTaskEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(NewTaskEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
