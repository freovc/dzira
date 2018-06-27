import { AfterViewInit, Component } from '@angular/core';
import { fadeAnimation } from './shared/animations';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    //MENU ANIMATION
    console.log('animation');

    $('.menu-top__toggle').on('click', function() {
      if ($('.menu-side').data('hidden') == '0') {
        $('.menu-side').data('hidden', '1');
        $('.collapse img').addClass('collapse-move');
        $(this).css('z-index', '100');
        $('.menu-side__brand').css('padding-top', '15px');
        $('.menu-side__brand').css('padding-bottom', '15px');
        $('.menu-side__icon').css('margin-left', '10px');
        $('.menu-side__link p').css('display', 'inline-block');
        $('.menu-side').css('left', '0');
        $(this).css('margin-left', '250px');
        $('.logo--large').css('display', 'block');
        $('.logo--small').css('display', 'none');
        $('.menu-side').css('z-index', '300');
        //$('.menu-side__glyphicon').css('left','263px')
      } else {
        $('.menu-side').data('hidden', '0');
        $('.menu-side').css('left', '-203px');
        $('.collapse img').removeClass('collapse-move');
        $('.menu-side__icon').css('margin-left', '209px');
        $('.menu-side__brand').css('padding-top', '22px');
        $('.menu-side__brand').css('padding-bottom', '24px');
        $('.menu-side__link p').css('display', 'none');
        $(this).css('margin-left', '46px');
        $('.logo--large').css('display', 'none');
        $('.logo--small').css('display', 'block');
        //$('.menu-side__glyphicon').css('left','54px');
        //$('.menu-side__glyphicon').css('top','31px')
      }
    });
    $(window).on('resize', function() {
      $('.menu-side').css('z-index', '300');
    });

    // MENU RESPONSIVE VIEW
    $(window).on('resize', function() {
      var win = $(this);
      if (win.width() < 900) {
        $('.menu-top').css('margin-left', '0');
        $('.menu-side').css('position', 'fixed');
        $('.menu-top__toggle').css('position', 'absolute');
        $('.menu-top__page-title').css('margin-left', '90px');
      }
    });

    // CHANGE MENU ICON
    var menuCounter = 0;
    $('.menu-side__glyphicon').on('click', function() {
      if (menuCounter % 2 == 0) {
        $('.menu-side__close-icon').css('display', 'block');
        $('.menu-side__open-icon').css('display', 'none');
      } else {
        $('.menu-side__open-icon').css('display', 'block');
        $('.menu-side__close-icon').css('display', 'none');
        $('.menu-side__open-icon').css('top', '8px');
      }
      menuCounter++;
    });

    $('.btn--delete').on('click', function() {
      $('.box--delete').css('display', 'block');
      $('.box--delete').after(
        "<div class='delete-background background-after-click'></div>",
      );
    });

    $('.box__icon-close').on('click', function() {
      $('.box--delete').css('display', 'none');
      $('div.delete-background').remove();
    });

    $('.btn--edit').on('click', function() {
      $('.box--edit').css('display', 'block');
      $('.box--edit').after(
        "<div class='edit-background background-after-click'></div>",
      );
    });

    $('.box__icon-close').on('click', function() {
      $('.box--edit').css('display', 'none');
      $('div.edit-background').remove();
    });

    $('.btn--password').on('click', function() {
      $('.box--password').css('display', 'block');
      $('.box--password').after(
        "<div class='password-background background-after-click'></div>",
      );
    });

    $('.box__icon-close').on('click', function() {
      $('.box--password').css('display', 'none');
      $('div.password-background').remove();
    });

    /*

     $(document).ready(function() {
     function setHeight() {
     windowHeight = $(window).innerHeight();
     $('.background-after-click').css('height', windowHeight);
     };
     setHeight();

     $(window).resize(function() {
     setHeight();
     });
     });
     */
  }
}
