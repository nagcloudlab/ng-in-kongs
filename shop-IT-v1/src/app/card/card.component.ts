import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  @ContentChild("header", { read: ElementRef })
  hRef!: ElementRef;
  @ViewChild("footer", { read: ElementRef })
  fRef!: ElementRef;


  ngAfterContentInit() {
    // console.log('CardComponent::ngAfterContentInit');
    // console.log(this.hRef.nativeElement);
    // this.hRef.nativeElement.style.backgroundColor = 'red';
    // todo any side-effect after content init like setting style to content DOM elements
  }
  ngAfterViewInit() {
    // console.log('CardComponent::ngAfterViewInit');
    // console.log(this.fRef.nativeElement);
  }

}
