import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-created',
  templateUrl: './user-created.component.html',
  styleUrls: ['./user-created.component.css'],
})
export class UserCreatedComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  close() {
    this.router.navigate(['/users/manageUsers', { fromCreateUser: true }]);
  }
}
