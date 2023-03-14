import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[socialTextStyle]'
})
export class TextStyleDirective implements OnInit{
  constructor(private elementRef: ElementRef){

  }
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';

  }
}
