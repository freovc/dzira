import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ClearAllState, DeleteProject, GetProjects, SelectProject
} from '../../actions/manage-project-page.actions';
import { Project } from '../../models/project.model';

import * as fromProject from '../../reducers';

@Component({
  selector: 'app-manage-projects-page',
  templateUrl: './manage-projects-page.component.html',
  styleUrls: ['./manage-projects-page.component.css']
})
export class ManageProjectsPageComponent implements OnInit {

  LoadingProjects$: Observable<boolean>;
  LoadingProjectsSuccess$: Observable<boolean>;
  LoadingProjectsFail$: Observable<boolean>;
  projects$: Observable<Array<Project>>;
  constructor(private store: Store<any>) {
    this.LoadingProjects$ = store.select(fromProject.getLoadingProjects);
    this.LoadingProjectsSuccess$ = store.select(fromProject.getLoadingProjectsSuccess);
    this.LoadingProjectsFail$ = store.select(fromProject.getLoadingProjectsFail);
    this.projects$ = store.select(fromProject.getProjects);
  }

  ngOnInit() {
    this.getProjects();
  }
  getProjects() {
    this.store.dispatch(new ClearAllState());
    this.store.dispatch(new GetProjects());
  }
  selectProject(project: Project) {
    this.store.dispatch(new SelectProject({project}))
  }
  deleteProject(project: Project) {
    this.selectProject(project);
    this.store.dispatch(new DeleteProject({projectId: project.id}))}
}
