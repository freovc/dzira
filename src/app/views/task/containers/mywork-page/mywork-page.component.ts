import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {
  ClearTasksEntitys, GetLoggedUserTask
} from '../../actions/tasks-entity.actions';
import * as fromTasks from '../../reducers';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-mywork-page',
  templateUrl: './mywork-page.component.html',
  styleUrls: ['./mywork-page.component.css']
})
export class MyworkPageComponent implements OnInit {

  tasks$: Observable<Array<Task>>;

  constructor(private store: Store<fromTasks.State>) {
    this.tasks$ = store.select(fromTasks.getTasks);
  }

  ngOnInit() {
    this.store.dispatch(new ClearTasksEntitys());
    this.store.dispatch(new GetLoggedUserTask());
  }

}
