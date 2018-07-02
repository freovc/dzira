import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  ClearTasksEntitys, GetBacklogTask, GetTaskboardTask
} from '../../actions/tasks-entity.actions';
import { Task } from '../../models/task.model';
import * as fromTasks from '../../reducers';

@Component({
  selector: 'app-taskboard-page',
  templateUrl: './taskboard-page.component.html',
  styleUrls: ['./taskboard-page.component.css']
})
export class TaskboardPageComponent implements OnInit {
  tasks$: Observable<Array<Task>>;

  constructor(private store: Store<fromTasks.State>) {
    this.tasks$ = store.select(fromTasks.getTasks);
  }

  ngOnInit() {
    this.store.dispatch(new ClearTasksEntitys());
    this.store.dispatch(new GetTaskboardTask());
  }

}
