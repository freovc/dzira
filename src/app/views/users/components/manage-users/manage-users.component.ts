import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from '../../models/user-roles.model';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  @Input() users: User[];
  @Input() loadingUsers: boolean;
  @Input() deleteModalVisible: boolean = false;
  @Input() deleteUserModalVisible: boolean = false;
  @Input() deletingUser: boolean = false;
  @Input() deleteUserComplete: boolean = false;
  @Input() selectedUser: User;
  @Input() loading: boolean;
  @Input() loadingSuccess: boolean;
  @Input() loadingFail: boolean;
  @Input() userRoles: UserRole[];
  @Input() updatingPassword: boolean;
  @Input() updatingPasswordSuccess: boolean;
  @Input() updatingPasswordFail: boolean;

  @Output() showDeleteUserModal = new EventEmitter<User>();
  @Output() hideDeleteUserModal = new EventEmitter<User>();
  @Output() deleteUser = new EventEmitter<void>();
  @Output() selectUser = new EventEmitter<User>();
  @Output() updateUser = new EventEmitter<User>();
  @Output() synchronizeFormWithStore = new EventEmitter<User>();
  @Output() clearLoadingState = new EventEmitter();
  @Output() updatePassword= new EventEmitter();
  @Output() setNewPassword= new EventEmitter<string>();
  @Output() setOldPassword= new EventEmitter<string>();



  editModalVisible = false;
  editPasswordVisible = false;
  modalAnimationState = 'open';
  closeEditPassword() {

    this.editPasswordVisible = false;
    this.clearLoadingState.emit();
  }
  editPassword = user => {
    this.clearLoadingState.emit();
    this.selectedUser = user;
    this.editPasswordVisible = true;
  };
  editUser = user => {
    this.clearLoadingState.emit();
    this.selectedUser = user;
    this.editModalVisible = true;
  };
  hideEditUserModal = () => {
    this.modalAnimationState = 'closing';
    setTimeout(() => {
      this.editModalVisible = false;
      this.modalAnimationState = null;
    }, 400);

    this.clearLoadingState.emit();
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  createUser() {
    this.router.navigate(['/users/create']);
  }
}
