import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../shared/shared.module';
import { TaskEffects } from './effects/task.effects';
import * as fromTaskState from './reducers';
import { NewTaskPageComponent } from './containers/new-task-page/new-task-page.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TaskRoutingModule } from './task-routing.module';
import { CreateSuccessComponent } from './components/create-success/create-success.component';
import { TasksViewPageComponent } from './containers/tasks-view-page/tasks-view-page.component';
import { BacklogPageComponent } from './containers/backlog-page/backlog-page.component';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('taskState', fromTaskState.reducers, { metaReducers: fromTaskState.metaReducers }),
    EffectsModule.forFeature([TaskEffects]),
    ReactiveFormsModule,
    TaskRoutingModule,
  ],
  declarations: [NewTaskPageComponent, NewTaskComponent, CreateSuccessComponent, TasksViewPageComponent, BacklogPageComponent]
})
export class TaskModule { }
