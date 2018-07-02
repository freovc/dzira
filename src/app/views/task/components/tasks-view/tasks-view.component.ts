import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.scss']
})
export class TasksViewComponent implements OnInit {
  @Input() tasks: Task[];
  @Input() gettingTasks: boolean;
  @Input() gettingTasksSuccess: boolean;
  @Input() gettingTasksFail: boolean;
  @Input() gettingTasksFailMsg: string;

  @Input() deletingTask: boolean;
  @Input() deletingTaskSuccess: boolean;
  @Input() deletingTaskFail: boolean;

  @Input() header: string;
  @Output() deleteTask = new EventEmitter();
  @Output() selectTask = new EventEmitter<Task>();
  @Output() clearPendingState = new EventEmitter();
  @Output() editTask = new EventEmitter<Task>();
  deleteDialogVisible = false;
  selectedTask: Task;
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onEditTask(task: Task) {
    this.clearPendingState.emit();
    this.editTask.emit(task);
    this.router.navigate(['.', {outlets: {modal: 'edit'}}], {relativeTo: this.activeRoute, skipLocationChange: true});
  }

  showDeleteDialog(task: Task) {
    this.selectedTask = task;
    this.deleteDialogVisible = true;
    this.selectTask.emit(task)
  }
  hideDeleteDialog(task: Task) {
    this.deleteDialogVisible = false;
    this.clearPendingState.emit();
  }
  onDeleteTask() {
    this.deleteTask.emit(this.selectedTask);
  }
}
