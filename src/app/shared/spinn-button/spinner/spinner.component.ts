import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  count: Array<any>;
  public color: any;
  @Input() dotColor;

  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  set dotCount(count) {
    this.count = Array(count);
  }

  ngOnInit() {
    this.color = this.sanitizer.bypassSecurityTrustStyle(this.dotColor);
  }
}
