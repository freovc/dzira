import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project-success',
  templateUrl: './create-project-success.component.html',
  styleUrls: ['./create-project-success.component.scss'],
})
export class CreateProjectSuccessComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  close() {
    this.router.navigate(['/projects/manage-projects']);
  }
}
