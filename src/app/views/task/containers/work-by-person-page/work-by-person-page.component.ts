import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  filter,
  flatMap,
  groupBy,
  map,
  merge,
  mergeMap,
  reduce,
  scan,
  switchMap,
  take,
  tap,
  toArray,
} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { LoadUsers } from '../../../users/actions';
import {
  ClearTasksEntitys,
  GetTaskboardTask,
  GetWorkByPersonTask,
} from '../../actions/tasks-entity.actions';
import { Task } from '../../models/task.model';
import * as fromTasks from '../../reducers';
import { of } from 'rxjs';

@Component({
  selector: 'app-work-by-person-page',
  templateUrl: './work-by-person-page.component.html',
  styleUrls: ['./work-by-person-page.component.css'],
})
export class WorkByPersonPageComponent implements OnInit, OnDestroy {
  tasksByUsers: { [key: string]: Task[] } = {};

  get users(): Array<string> {
    return Object.keys(this.tasksByUsers);
  }
  taskUpdated$: Subscription;
  personsTask: Subscription;
  constructor(private store: Store<fromTasks.State>) {
    this.taskUpdated$ = store.select(fromTasks.getUpdatingTaskSuccess).subscribe(() => {
      this.personsTask && this.personsTask.unsubscribe();
      this.tasksByUsers = {};
      this.personsTask = this.taskPersonSubscriptionGenerator();
    });
     this.personsTask =  this.taskPersonSubscriptionGenerator()
  }
  ngOnInit() {
    this.store.dispatch(new ClearTasksEntitys());
    this.store.dispatch(new GetTaskboardTask());
    this.store.dispatch(new LoadUsers());
  }

  ngOnDestroy(): void {
    console.log('unsubscribe');
    this.personsTask.unsubscribe();
  }
  taskPersonSubscriptionGenerator = () => this.store
  .pipe(
    select(fromTasks.getTaskWithUsers),
    tap(data => console.log('getting from store', data)),
    filter(({ users, total, tasks }) => total > 0 && tasks.length > 0),
    take(1),
    switchMap(({ users, total, tasks }) =>
      tasks.map(task => ({
        ...task,
        member: task.member ? users[task.member as number].fullName : null
      })),
    ),
    groupBy(t => t.member),
    mergeMap(group$ =>
      group$.pipe(scan((acc, cur) => [...acc, cur], ['' + group$.key])),
    ),
  ).subscribe((gr: Array<any>) => {
    if(gr[0] === 'null') {
      return
    }
    this.tasksByUsers[gr[0]] = gr.slice(1);
    this.tasksByUsers = { ...this.tasksByUsers };
  });

}
