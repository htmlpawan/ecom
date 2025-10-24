import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appTestDirective]'
})
export class TestDirectiveDirective {

  constructor(private el: ElementRef) { 
  }

  ngOnInit() {
    this.el.nativeElement.style.color = "green";
    this.el.nativeElement.textContent = this.el.nativeElement.textContent.toUpperCase();
  }

}
