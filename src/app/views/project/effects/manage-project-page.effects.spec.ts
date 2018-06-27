import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ManageProjectPageEffects } from './manage-project-page.effects';

describe('ManageProjectPageService', () => {
  let actions$: Observable<any>;
  let effects: ManageProjectPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ManageProjectPageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ManageProjectPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
