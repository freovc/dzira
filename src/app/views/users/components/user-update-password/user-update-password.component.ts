import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { bounceInLeft, bounceOutRight } from 'ngx-animate/lib';
import { FormHelper } from '../../../../shared/helpers';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-user-update-password',
  templateUrl: './user-update-password.component.html',
  styleUrls: ['./user-update-password.component.scss'],
  animations: [
    trigger('jump', [
      transition(':enter', useAnimation(bounceInLeft)),
      transition(':leave', useAnimation(bounceOutRight)),
    ]),
  ],
})
export class UserUpdatePasswordComponent implements OnInit {
  @Input() updatingPassword: boolean;
  @Input() updatingPasswordSuccess: boolean;
  @Input() updatingPasswordFail: boolean;
  @Input() user: User;
  @Output() updatePassword = new EventEmitter();
  @Output() closeModal = new EventEmitter();
  @Output() setNewPassword= new EventEmitter<string>();
  @Output() setOldPassword= new EventEmitter<string>();

  form: FormGroup;
  formHelper: FormHelper;
  constructor(private formBuilder: FormBuilder) {
    this.formHelper = new FormHelper(this.form);
  }

  get passwordsNotEquals() {
    return this.form.errors && this.form.errors.passwordNotEquals;
  }
  _updatePassword() {
    this.formHelper.markAllControlsAsDirtyAndTouched();
    if (this.form.valid){
      this.updatePassword.emit();
      this.form.reset();
    }
  }
  ngOnInit() {
    this.buildForm();
    this.formHelper = new FormHelper(this.form);


  }
  newPasswordBlur(password) {
    this.setNewPassword.emit(password);
  }
  oldPasswordBlur(password) {
    this.setOldPassword.emit(password);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      newPassword2: ['', [Validators.required, Validators.minLength(8)]],
    }, {
      validator: [
        (fg: FormGroup) => fg.get('newPassword').value === fg.get('newPassword2').value ? null : {passwordNotEquals: true},
      ]
    });
  }
}
