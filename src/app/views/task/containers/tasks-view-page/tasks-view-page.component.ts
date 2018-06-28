import {Component, Input, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../reducers';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-tasks-view-page',
  templateUrl: './tasks-view-page.component.html',
  styleUrls: ['./tasks-view-page.component.css']
})
export class TasksViewPageComponent implements OnInit {
  @Input() tasks$: Observable<Array<Task>>;
  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
  }

}
