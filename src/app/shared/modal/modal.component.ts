import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { zoomIn, zoomOut } from 'ngx-animate/lib';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modalState', [
      transition(':enter', useAnimation(zoomIn, { params: { timing: 0.4 } })),
      transition(
        '* => closing',
        useAnimation(zoomOut, { params: { timing: 0.4 } }),
      ),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  @Input() showAs: 'delete' | 'info' = 'info';
  @Input() modalState: null;
  @Output() backdropClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  modalClick(event: Event) {
    event.stopPropagation();
  }
}
