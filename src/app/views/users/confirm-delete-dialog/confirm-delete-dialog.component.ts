import { transition, trigger, useAnimation } from '@angular/animations';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { zoomIn, zoomOut } from 'ngx-animate/lib';
import { Subscription } from 'rxjs/internal/Subscription';
import { switchMap } from 'rxjs/operators';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css'],
  animations: [
    trigger('modalState', [
      transition('* => show', useAnimation(zoomIn)),
      transition('* => hide', useAnimation(zoomOut)),
    ]),
  ],
})
export class ConfirmDeleteDialogComponent implements OnInit, OnDestroy {
  modalState = 'show';
  deleteUserSubscription: Subscription;
  error: string;
  deleting = true;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) {}

  ngOnInit() {}

  closeModal(deleted: boolean = false) {
    this.modalState = 'hide';
    setTimeout(
      () =>
        this.router.navigate([
          '/users/manageUsers',
          {
            outlet: { modal: null },
            deleted: deleted,
          },
        ]),
      500,
    );
  }

  sectionClick(event: Event) {
    event.stopPropagation();
  }

  deleteUser() {
    this.deleting = true;
    this.deleteUserSubscription = this.activatedRouter.paramMap
      .pipe(
        switchMap(paramMap =>
          this.usersService.deleteUser(parseInt(paramMap.get('id'))),
        ),
      )
      .subscribe(() => {
        this.deleting = false;
        this.closeModal(true);
      }, (fail: HttpErrorResponse) => (this.error = fail.message));
  }

  ngOnDestroy(): void {
    this.deleteUserSubscription && this.deleteUserSubscription.unsubscribe();
  }
}
