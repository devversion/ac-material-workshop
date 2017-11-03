import {Directive, HostBinding} from '@angular/core';
import {Direction, Directionality} from '@angular/cdk/bidi';

@Directive({
  selector: '[bidiIcon]'
})
export class BidiIconDirective {

  @HostBinding('style.transform') transformStyle = '';

  constructor(private dir: Directionality) {
    dir.change.subscribe(() => this.setDirection(dir.value));

    this.setDirection(dir.value);
  }

  private setDirection(direction: Direction) {
    this.transformStyle = direction === 'rtl' ? 'scaleX(-1)' : '';
  }
}
