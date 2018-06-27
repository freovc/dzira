import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromTaskState from './reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('taskState', fromTaskState.reducers, { metaReducers: fromTaskState.metaReducers })
  ],
  declarations: []
})
export class TaskModule { }
