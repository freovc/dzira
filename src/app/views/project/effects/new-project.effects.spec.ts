import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NewProjectEffects } from './new-project.effects';

describe('NewProjectService', () => {
  let actions$: Observable<any>;
  let effects: NewProjectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NewProjectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(NewProjectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
