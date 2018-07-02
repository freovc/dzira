import {
  Component, EventEmitter, Input, OnDestroy, OnInit, Output
} from '@angular/core';
import { E } from '@angular/core/src/render3';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { FormHelper } from '../../../../shared/helpers';
import { User } from '../../../users/models/User.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],

})
export class NewProjectComponent implements OnInit, OnDestroy {
  @Input() users: User[];
  @Input() creatingProject: boolean;
  @Input() creatingProjectFail: boolean;
  @Input() creatingProjectSuccess: boolean;
  @Input() deleteProject: boolean;
  @Input() deleteProjectSuccess: boolean;
  @Input() deleteProjectFai: boolean;
  @Output() createProject = new EventEmitter();
  @Output() syncForm = new EventEmitter();

  form: FormGroup;
  formHelper: FormHelper;
  formSyncSubscription: Subscription;
  set members(members){
    this.form.get('members').patchValue(members);
  }
  get members() {
    return this.form.get('members').value;
  }
  dropdownConfig: any = {
    displayKey: 'fullName',
    placeholder: 'Add members',
    search: true
  };
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildForm();
    this.formSyncSubscription = this.form.valueChanges.subscribe(values => this.syncForm.emit(values));
  }
  buildForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: '',
      members: [[]],
    });
    this.formHelper = new FormHelper(this.form);

  }

  submit() {
    this.formHelper.markAllControlsAsDirtyAndTouched();
    // TODO enable validation
    if(this.form.valid) {
      this.createProject.emit();
    }
  }
  ngOnDestroy() {
    this.formSyncSubscription && this.formSyncSubscription.unsubscribe();
  }
}
