import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { FormHelper } from '../../../../shared/helpers';
import { Project } from '../../../project/models/project.model';
import { User } from '../../../users/models/User.model';
import { ProjectStatus } from '../../types/project-status.enum';
import { TaskForm } from '../../types/task-form';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit, OnDestroy {
  @Input() creatingTask: boolean;
  @Input() creatingTaskFail: boolean;
  @Input() creatingTaskSuccess: boolean;
  @Input() updatingTask: boolean;
  @Input() updatingTaskFail: boolean;
  @Input() updatingTaskSuccess: boolean;
  @Input() newTask: any;
  @Input() users: Array<User>;
  @Input() projects: Array<Project>;
  @Input()
  task: TaskForm = {
    id: null,
    description: '',
    member: null,
    project: null,
    status: 'notBegin',
    title: '',
  };
  // CHECK Dont now what is better inner formGroup or formGroup in container .....
  // @Input() form: FormGroup;
  form: FormGroup;
  formHelper: FormHelper;

  projectStatuses = Object.entries(ProjectStatus).map(([k, v]) => ({k, v}));
  // Use one component for update and create this time
  @Input() isCreateForm: boolean;

  @Output() createTask = new EventEmitter<TaskForm>();
  @Output() updateTask = new EventEmitter<TaskForm>();
  @Output() synchronizeForm = new EventEmitter<TaskForm>();
  private formChangeSubscription: Subscription;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildForm();
    this.formHelper = new FormHelper(this.form);
    this.formChangeSubscription = this.form.valueChanges.subscribe(value =>
      this.synchronizeForm.emit(value),
    );
  }
  buildForm() {
    this.form = this.fb.group({
      id: [this.task.id],
      description: [this.task.description, [Validators.required]],
      member: [this.task.member && this.task.member.id || 'none'],
      project: [this.task.project && this.task.project.id, [Validators.required]],
      status: [this.task.status, [Validators.required]],
      title: [this.task.title, [Validators.required]],
    });
  }

  onCreateTask() {
      if (this.form.invalid) {
        this.formHelper.markAllControlsAsDirtyAndTouched();
      } else {
        this.createTask.emit(null);
      }
  }
  onUpdateTask() {
    console.log('updateTask()', this.form.value);
    this.updateTask.emit(this.form.value);
  }

  ngOnDestroy(): void {
    if (this.formChangeSubscription) {
      this.formChangeSubscription.unsubscribe();
    }
  }
}
