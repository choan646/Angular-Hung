import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private ele: ElementRef, private render: Renderer2) {}

  @HostBinding('style.backgroundColor') bgColor = 'aqua';

  @HostListener('mouseenter') eventHover(): void {
    // this.ele.nativeElement.style.backgroundColor = 'yellow';
    this.render.setStyle(this.ele.nativeElement, 'backgroundColor', 'yellow');
  }
  @HostListener('mouseleave') eventLeave(): void {
    // this.ele.nativeElement.style.backgroundColor = 'blue';
    this.render.setStyle(this.ele.nativeElement, 'backgroundColor', 'blue');
  }
}
