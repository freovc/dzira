import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormHelper } from '../../../../shared/helpers';
import { UserRole } from '../../models/user-roles.model';
import { User } from '../../models/User.model';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  @Input() userRoles: UserRole[];
  @Input('creatingUser') pending: boolean;
  @Input() creatingUserSuccess: boolean;
  @Input() creatingUserFail: boolean;
  @Input() creatingUserErrorMsg: string;
  @Output() createUser = new EventEmitter<User>();
  formMode: 'create' | 'update' = 'create';

  userForm: FormGroup;
  formHelper: FormHelper;

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.initializeFormGroup();
    this.formHelper = new FormHelper(this.userForm);
  }

  ngOnInit() {}

  onCreateUser() {
    if (this.userForm.invalid) {
      this.formHelper.markAllControlsAsDirtyAndTouched();
      return;
    } else {
      this.createUser.emit(this.userForm.value);
    }
  }

  handlePhoto(event) {
    this.formHelper
      .readFileAsDataURL(event.target)
      .then(result => this.userForm.get('photo').patchValue(result));
  }

  passwordsError() {
    return (
      this.userForm.errors &&
      this.userForm.errors.passwords &&
      this.userForm.controls.password &&
      this.userForm.controls.password.dirty &&
      this.userForm.controls.password.touched &&
      this.userForm.controls.repeatPassword.dirty &&
      this.userForm.controls.repeatPassword.touched
    );
  }

  ngOnDestroy(): void {}

  private initializeFormGroup() {
    this.userForm = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        repeatPassword: ['', Validators.required],
        photo: [''],
        role: ['', Validators.required],
      },
      {
        validator: [this.passwordEquals],
      },
    );
  }

  private passwordEquals(userForm: FormGroup) {
    return userForm.get('password').value ==
      userForm.get('repeatPassword').value
      ? null
      : { passwords: true };
  }
}
