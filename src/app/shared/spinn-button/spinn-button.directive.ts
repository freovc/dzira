import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SpinnerComponent } from './spinner/spinner.component';

/**
 *
 * A directive that creates a spinning button when a spin flag is set.
 * The leaves directive keeps width and hight of the button.
 *
 * Basic usage:
 * <button class="btn btn-primary>
 *    <span [appSpinnig]="spinnFlag" dotColor="#ffffff">Async action</span>
 * </button>
 *
 * @author Krzysztof Podlaski {email} kpodlaski@gmail.com
 *
 */
@Directive({
  selector: '[appSpinning]',
})
export class SpinnButtonDirective implements OnInit, OnDestroy {
  stateChange: Subscription;
  /**
   * Spinner dot color, default black
   * @type {string}
   */
  @Input() dotColor = '#ffffff';
  private $spinning: Subject<boolean> = new Subject();
  private dotCount = 3;
  private readonly factory: ComponentFactory<any>;
  private componentRef: ComponentRef<any>;
  private initialHeight: string | number;
  private initialWidth: string | number;
  private initialContent: any;
  /**
   * Button wrapping HTMLElement with direcive;
   */
  private button: HTMLButtonElement;
  private changeState: (boolean) => void = spinning => {
    this.viewContainer.clear();
    if (spinning) {
      this.componentRef = this.viewContainer.createComponent(this.factory);
      this.componentRef.instance.dotColor = this.dotColor;
      this.componentRef.instance.dotCount = this.dotCount;
      this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.button, 'min-height', this.initialHeight);
    } else {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'display',
        'initial',
      );
    }
  };

  constructor(
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
  ) {
    this.factory = this.componentFactoryResolver.resolveComponentFactory(
      SpinnerComponent,
    );
  }

  @Input()
  set appSpinning(spinningValue) {
    this.$spinning.next(spinningValue);
  }

  calculateDotCount(width: number): void {
    const fontSize = parseFloat(
      window.getComputedStyle(this.button, null).getPropertyValue('font-size'),
    );
    this.dotCount = Math.floor(width / (fontSize * 0.45 + 10));
    if (this.dotCount > 9) {
      this.dotCount = 9;
    }
  }

  ngOnInit(): void {
    this.setWrapperButtonStyle();
    this.calculateDotCount(this.initialWidth as number);
    this.stateChange = this.$spinning.subscribe(this.changeState);
  }

  ngOnDestroy(): void {
    this.stateChange && this.stateChange.unsubscribe();
    this.componentRef && this.componentRef.destroy();
  }

  private setWrapperButtonStyle() {
    this.button = this.renderer.parentNode(this.elementRef.nativeElement);
    this.initialContent = this.elementRef.nativeElement.innerHTML;
    this.initialHeight = this.button.offsetHeight;
    this.initialWidth = this.button.offsetWidth;
    this.renderer.setStyle(this.button, 'min-width', `${this.initialWidth}px`);
    this.renderer.setStyle(
      this.button,
      'min-height',
      `${this.initialHeight}px`,
    );
  }
}
