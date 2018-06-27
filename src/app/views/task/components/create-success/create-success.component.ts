import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-success',
  templateUrl: './create-success.component.html',
  styleUrls: ['./create-success.component.scss']
})
export class CreateSuccessComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  close() {
    this.router.navigate(['/tasks/new-task']);
  }

}
