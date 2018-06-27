import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnButtonDirective } from './spinn-button.directive';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SpinnButtonDirective, SpinnerComponent],
  exports: [SpinnButtonDirective],
  entryComponents: [SpinnerComponent],
})
export class SpinnButtonModule {}
