import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackdropComponent } from './backdrop/backdrop.component';
import { DialogComponent } from './dialog/dialog.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { ModalComponent } from './modal/modal.component';
import { SpinnButtonModule } from './spinn-button/spinn-button.module';

const components = [
  BackdropComponent,
  LoadingIndicatorComponent,
  DialogComponent,
  ModalComponent,
];

@NgModule({
  imports: [SpinnButtonModule, CommonModule],
  exports: [components, SpinnButtonModule, CommonModule],
  declarations: [components, DialogComponent, ModalComponent],
  providers: [],
})
export class SharedModule {}
