import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from '../../shared/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeAnimation],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
