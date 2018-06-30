import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GetProjects } from '../../../project/actions/manage-project-page.actions';
import { Project } from '../../../project/models/project.model';
import { LoadUsers } from '../../../users/actions';
import { User } from '../../../users/models/User.model';
import { RequestUpdateTask } from '../../actions/tasks-entity.actions';
import * as fromTask from '../../reducers';
import * as fromUsers from '../../../users/reducers';
import * as fromProject from '../../../project/reducers';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css'],
})
export class TaskEditPageComponent implements OnInit {
  loadSingleTask$: Observable<boolean>;
  loadSingleTaskSuccess$: Observable<boolean>;
  loadSingleTaskFail$: Observable<boolean>;
  updatingTask$: Observable<boolean>;
  updatingTaskSuccess$: Observable<boolean>;
  updatingTaskFail$: Observable<boolean>;
  loadedTask$: Observable<Task>;
  users$: Observable<Array<User>>;
  projects$: Observable<Array<Project>>;
  constructor(
    private store: Store<fromTask.State>,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {
    this.loadSingleTask$ = this.store.select(fromTask.getLoadingTask);
    this.loadSingleTaskSuccess$ = this.store.select(
      fromTask.getLoadingTaskSuccess,
    );
    this.loadSingleTaskFail$ = this.store.select(fromTask.getLoadingTaskFail);
    this.updatingTask$ = this.store.select(fromTask.getUpdatingTask);
    this.updatingTaskSuccess$ = this.store.select(fromTask.getUpdatingTaskSuccess);
    this.updatingTaskFail$ = this.store.select(fromTask.getUpdatingTaskFail);
    this.loadedTask$ = this.store.select(fromTask.getLoadedTask);
    this.users$ = store.select(fromUsers.getUsers);
    this.projects$ = store.select(fromProject.getProjects);

  }
  closeWindow() {
    this.router.navigate(['..'], { relativeTo: this.activatedRouter });
  }
  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new GetProjects());
  }
  updateTask(task: Task){
    console.log('update task', task);
    this.store.dispatch(new RequestUpdateTask({task}));
  }
}
