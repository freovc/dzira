import {
  Component, EventEmitter, Input, OnDestroy, OnInit, Output
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { FormHelper } from '../../../../shared/helpers';
import { User } from '../../../users/models/User.model';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss'],
})
export class EditProjectComponent implements OnInit, OnDestroy {
  @Input() project: Project;
  @Input() users: Array<User>;
  @Input() updatingProjects: boolean;
  @Input() updatingProjectsSuccess: boolean;
  @Input() updatingProjectsFail: boolean;
  @Output() updateProject = new EventEmitter();
  @Output() synchronizeFormProject = new EventEmitter();
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
    search:true
  };
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this.members = this.project.members;
    this.formSyncSubscription = this.form.valueChanges.subscribe(value => {
      console.log('value update', value);
      this.synchronizeFormProject.emit(value);
    });
  }
  closeModal() {
    this.router.navigate(['/projects/manage-projects', { outlets: { modal: null } }]);
  }
  private _closeModal() {

  }
  buildForm() {
    this.form = this.fb.group({
      id: [this.project.id],
      title: [this.project.title],
      description: [this.project.description],
      startDate: [this.project.startDate],
      endDate: [this.project.endDate],
      members: [this.project.members],
    });
    this.formHelper = new FormHelper(this.form);

  }

  ngOnDestroy(): void {
    if (this.formSyncSubscription) {
      this.formSyncSubscription.unsubscribe();
    }
  }
}
