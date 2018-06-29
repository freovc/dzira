import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  ClearTasksEntitys, GetBacklogTask
} from '../../actions/tasks-entity.actions';
import { Task } from '../../models/task.model';
import * as fromTasks from '../../reducers';

@Component({
  selector: 'app-backlog-page',
  templateUrl: './backlog-page.component.html',
  styleUrls: ['./backlog-page.component.css']
})
export class BacklogPageComponent implements OnInit {
  tasks$: Observable<Array<Task>>;

  constructor(private store: Store<fromTasks.State>) {
    this.tasks$ = store.select(fromTasks.getTasks);
  }
  ngOnInit() {
    this.store.dispatch(new ClearTasksEntitys());
    this.store.dispatch(new GetBacklogTask());
  }
}
