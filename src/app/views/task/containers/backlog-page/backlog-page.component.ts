import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';
import {GetBacklogTask} from '../../actions/tasks-entity.actions';

@Component({
  selector: 'app-backlog-page',
  templateUrl: './backlog-page.component.html',
  styleUrls: ['./backlog-page.component.css']
})
export class BacklogPageComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.dispatch(new GetBacklogTask())
  }

}
