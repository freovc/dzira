import { transition, trigger, useAnimation } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { zoomIn, zoomOut } from 'ngx-animate/lib';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
    trigger('modalState', [
      transition(':enter', useAnimation(zoomIn, { params: { timing: 0.4 } })),
      transition(':leave', useAnimation(zoomOut, { params: { timing: 0.4 } })),
    ]),
  ],
})
export class DialogComponent implements OnInit {
  @Input() header = 'Are you sure you want to do it?';
  @Input() message = 'You will not be able to undo your changes.';
  @Input() showAs: 'delete' | 'info' = 'delete';
  @Input() deletingUser: boolean;
  @Input() complete: boolean;
  @Input() completeMsg: string = 'Request complete';
  @Output() confirm = new EventEmitter();
  @Output() cancel = new EventEmitter();
  @ViewChild('dialog') dialog: ElementRef;
  dialogVisible = true;
  modalState = 'show';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  cancelDelete() {
    this.dialogVisible = false;
    setTimeout(() => this.cancel.emit(), 400);
  }

  confirmDelete() {
    this.confirm.emit();
  }
}
