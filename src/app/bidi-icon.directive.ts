import {Directive, HostBinding} from '@angular/core';
import {Direction, Directionality} from '@angular/cdk/bidi';

@Directive({
  selector: '[bidiIcon]'
})
export class BidiIconDirective {
  @HostBinding('style.transform')
  transformStyle = '';

  constructor(private dir: Directionality ) {
    this.setStyles(dir.value);

    dir.change.subscribe(() => this.setStyles(dir.value));
  }

  setStyles (direction) {
    this.transformStyle = direction === 'rtl' ? 'scaleX(-1)' : '';
  }
}
