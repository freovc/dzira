import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LoadSingleTask } from '../../actions/single-task.actions';
import {
  ClearPendingState,
  RequestDeleteTask, SelectTask
} from '../../actions/tasks-entity.actions';
import { Task } from '../../models/task.model';
import * as fromTask from '../../reducers';

@Component({
  selector: 'app-tasks-view-page',
  templateUrl: './tasks-view-page.component.html',
  styleUrls: ['./tasks-view-page.component.css']
})
export class TasksViewPageComponent implements OnInit {
  @Input() tasks: Array<Task>;
  @Input() header: string;
  gettingTasks$: Observable<boolean>;
  gettingTasksSuccess$: Observable<boolean>;
  gettingTasksFail$: Observable<boolean>;
  gettingTasksFailMsg$: Observable<string>;
  deletingTask$: Observable<boolean>;
  deletingTaskSuccess$: Observable<boolean>;
  deletingTaskFail$: Observable<boolean>;
  updatingTask$: Observable<boolean>;
  updatingTaskSuccess$: Observable<boolean>;
  updatingTaskFail$: Observable<boolean>;


  constructor(private store: Store<fromTask.State>) {
    this.gettingTasks$ = store.select(fromTask.getGettingTasks);
    this.gettingTasksFail$ = store.select(fromTask.getGetTasksFail);
    this.gettingTasksFailMsg$ = store.select(fromTask.getGetTasksFailMsg);
    this.deletingTask$ = store.select(fromTask.getGetDeltingTask);
    this.deletingTaskSuccess$ = store.select(fromTask.getGetDeltingTaskSuccess);
    this.deletingTaskFail$ = store.select(fromTask.getGetDeltingTaskFail);
  }

  ngOnInit() {
  }
  editTask(task: Task) {
    this.store.dispatch(new LoadSingleTask({task}));
  }
  deleteTask(task: Task) {
    console.log('Dispatch deleteTask todo');
    this.store.dispatch(new RequestDeleteTask({task}));
  }
  selectTask(selectedTask: Task) {
    console.log('Dispatch selectTask todo');
    this.store.dispatch(new SelectTask({selectedTask}))
  }
  clearPendingState() {

    this.store.dispatch(new ClearPendingState());
  }
}
