import {Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
  selector: '[contactListStyle]'
})
export class ListStyleDirective implements OnInit{
  constructor(private elementRef: ElementRef){}

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
  }
}
