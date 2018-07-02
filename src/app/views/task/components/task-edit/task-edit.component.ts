import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../project/models/project.model';
import { User } from '../../../users/models/User.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  @Input() loadSingleTask: boolean;
  @Input() loadSingleTaskSuccess: boolean;
  @Input() loadSingleTaskFail: boolean;
  @Input() updatingTask: boolean;
  @Input() updatingTaskSuccess: boolean;
  @Input() updatingTaskFail: boolean;
  @Input() loadedTask: boolean;
  @Input() users: User[];
  @Input() projects: Project[];
  @Output() closeWindow = new EventEmitter();
  @Output() updateTask = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
  }
  ignoreClick(event: Event) {
    event.stopPropagation();
    return false;
  }
}
