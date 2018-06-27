import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  template: `
  <div [class]="modalClass" (click)="backdropClick.emit($event)">
        <ng-content></ng-content>
  </div>
  
  `,
  styles: [
    `
      .app-modal {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .backdrop {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1040;
        background-color: rgba(194, 255, 112, 0.52);
      }

      .delete {
        background-color: rgba(255, 0, 0, 0.52);
      }
    `,
  ],
})
export class BackdropComponent implements OnInit {
  @Input() showAs: 'delete' | 'info' = 'delete';
  @Output() backdropClick = new EventEmitter();
  modalClass: string;

  constructor() {}

  ngOnInit() {
    this.modalClass = ['app-modal', 'backdrop', this.showAs].join(' ');
  }
}
