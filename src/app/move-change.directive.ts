import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMoveChange]'
})
export class MoveChangeDirective {

  @HostBinding('style.color') fontColor = 'black';
  @HostBinding('style.fontSize.em') fontsizeEm = 1;
  @HostBinding('style.fontSize') fontSize = '14px';
  

  @HostListener('mouseenter') onEnter() {
    this.fontColor = 'blue';
    this.fontsizeEm = 2;
  }

  @HostListener('mouseleave') onLeave() {
    this.fontColor = 'black';
    this.fontsizeEm = 1;
  }

    @HostListener('onfocus') onFocus() {
    this.fontColor = 'red';
    this.fontSize = '18px';
  }

  constructor() { }

}
