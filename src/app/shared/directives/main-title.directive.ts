import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMainTitle]'
})
export class MainTitleDirective {

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { 
    this.titleStyle()
  }
  titleStyle(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', '20px')
  }

}
