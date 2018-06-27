import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { GetProjects } from '../../../project/actions/manage-project-page.actions';
import { Project } from '../../../project/models/project.model';
import { LoadUsers } from '../../../users/actions';
import { User } from '../../../users/models/User.model';
import { CreateTask, SyncForm } from '../../actions/new-task.actions';
import { TaskForm } from '../../types/task-form';
import * as fromTask from '../../reducers';
import * as fromUsers from '../../../users/reducers';
import * as fromProject from '../../../project/reducers';
@Component({
  selector: 'app-new-task-page',
  templateUrl: './new-task-page.component.html',
  styleUrls: ['./new-task-page.component.css']
})
export class NewTaskPageComponent implements OnInit {
  creatingTask$: Observable<Boolean>;
  creatingTaskFail$: Observable<Boolean>;
  creatingTaskSuccess$: Observable<Boolean>;
  newTask$: Observable<TaskForm>;
  users$: Observable<Array<User>>;
  projects$: Observable<Array<Project>>;
  form: FormGroup;
  constructor(private store: Store<any>, ) {
    this.creatingTask$ = store.select(fromTask.getCreatingTask);
    this.creatingTaskFail$ = store.select(fromTask.getCreatingTaskFail);
    this.creatingTaskSuccess$ = store.select(fromTask.getCreatingTaskSuccess);
    this.newTask$ = store.select(fromTask.getNewTask);
    this.users$ = store.select(fromUsers.getUsers);
    this.projects$ = store.select(fromProject.getProjects);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new GetProjects());
  }
  createTask() {
    this.store.dispatch(new CreateTask());
  }
  updateTask(){}
  synchronizeForm(newTask: TaskForm) {
    this.store.dispatch(new SyncForm({newTask}))
  }

}
