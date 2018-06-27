import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { LoadUsers } from '../../../users/actions';
import { User } from '../../../users/models/User.model';
import { CreateProject, SyncForm } from '../../actions/new-project.actions';
import { ProjectState } from '../../reducers';
import * as fromProject from '../../reducers';
import * as fromUsers from '../../../users/reducers'
@Component({
  selector: 'app-new-project-page',
  templateUrl: './new-project-page.component.html',
  styleUrls: ['./new-project-page.component.scss']
})
export class NewProjectPageComponent implements OnInit {
  users$: Observable<Array<User>>;

  creatingProject$: Observable<boolean>;
  creatingProjectFail$: Observable<boolean>;
  creatingProjectSuccess$: Observable<boolean>;


  constructor(private store: Store<fromProject.ProjectState>) {
    this.users$ = store.select(fromUsers.getUsers);
    this.creatingProject$ = store.select(fromProject.getCreatingProject );
    this.creatingProjectFail$ = store.select(fromProject.getCreatingProjectFail );
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
  }
  createProject() {
    this.store.dispatch(new CreateProject());
  }
  syncForm(project) {
    this.store.dispatch(new SyncForm({project}));
  }
}
