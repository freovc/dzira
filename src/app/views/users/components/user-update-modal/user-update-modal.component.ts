import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bounceInLeft, bounceOutRight } from 'ngx-animate/lib';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormHelper } from '../../../../shared/helpers';
import { UserRole } from '../../models/user-roles.model';
import { User } from '../../models/User.model';

export const jumpTrigger = trigger('jump', [
  transition(':enter', useAnimation(bounceInLeft)),
  transition(':leave', useAnimation(bounceOutRight)),
]);

@Component({
  selector: 'app-user-update-modal',
  templateUrl: './user-update-modal.component.html',
  styleUrls: ['./user-update-modal.component.scss'],
  animations: [jumpTrigger],
})
export class UserUpdateModalComponent implements OnInit {
  @Input() updating: boolean;
  @Input() user: User;
  @Input() loading: boolean;
  @Input() loadingSuccess: boolean;
  @Input() loadingFail: boolean;
  @Input() userRoles: UserRole[];
  @Output() closeModal = new EventEmitter();
  @Output() updateUser = new EventEmitter();
  @Output() synchronizeFormWithStore = new EventEmitter(); // NEEDACTION
  userForm: FormGroup;
  formHelper: FormHelper;
  private formValueChangeSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeFormGroup();
    this.formHelper = new FormHelper(this.userForm);
    this.formValueChangeSubscription = this.userForm.valueChanges.subscribe(
      value => this.synchronizeFormWithStore.emit(value),
    );
  }

  handlePhoto(event) {
    this.formHelper
      .readFileAsDataURL(event.target)
      .then(result => this.userForm.get('photo').patchValue(result));
  }

  onUpdateUser() {
    if (this.userForm.invalid) {
      this.formHelper.markAllControlsAsDirtyAndTouched();
      return;
    } else {
      this.updateUser.emit(this.userForm.value);
    }
  }

  private initializeFormGroup() {
    this.userForm = this.formBuilder.group({
      fullName: [this.user.fullName, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
      photo: [this.user.photo],
      role: [this.user.role, Validators.required],
    });
  }
}
