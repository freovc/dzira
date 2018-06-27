import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-404-component',
  template: `
    <section class="box box--delete box--modal center--absolute">
      <header>
        <div class="box--modal__title">

          <h2 class="box__title box--modal__title-text">Error</h2>
        </div>
        <i class="glyphicon glyphicon-remove-circle box__icon-close"></i>
      </header>
      <div class="box--content">
        <h2 class="text-danger">Sorry. <br>
        <small>Page can not be found.</small></h2>
      </div>
      <a class="btn btn--modal" routerLink="/">
        <span>Go to home page</span>
      </a>
    </section>

  `,
})
export class Error404Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
