import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LoadUsers } from '../../../users/actions';
import { User } from '../../../users/models/User.model';
import {
  SynchronizeFormProject, UpdateProject
} from '../../actions/manage-project-page.actions';
import { Project } from '../../models/project.model';
import * as fromProject from '../../reducers';
import * as fromUsers from '../../../users/reducers';
@Component({
  selector: 'app-edit-project-page',
  templateUrl: './edit-project-page.component.html',
  styles: []
})
export class EditProjectPageComponent implements OnInit {
  project$: Observable<Project>;
  formProjectLoadSuccess$: Observable<boolean>;
  users$: Observable<Array<User>>;
  updatingProjects$: Observable<boolean>;
  updatingProjectsSuccess$: Observable<boolean>;
  updatingProjectsFail$: Observable<boolean>;
  constructor(private store: Store<fromProject.ProjectState>) {

    this.formProjectLoadSuccess$ = store.select(fromProject.getLoadingProjectSuccess);
    this.project$ = store.select(fromProject.getformProject);
    this.users$ = store.select(fromUsers.getUsers);
    this.updatingProjects$ = this.store.select(fromProject.getUpdatingProjects );
    this.updatingProjectsSuccess$ = this.store.select(fromProject.getUpdatingProjectsSuccess );
    this.updatingProjectsFail$ = this.store.select(fromProject.getUpdatingProjectsFail );
  }
  synchronizeFormProject(project) {
    this.store.dispatch(new SynchronizeFormProject({projectForm: project}))
  }
  updateProject() {
    this.store.dispatch(new UpdateProject());
  }
  ngOnInit() {
    this.store.dispatch(new LoadUsers())
  }


}
