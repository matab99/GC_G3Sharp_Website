import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('brand') brandElement!: ElementRef;

  constructor(private viewportScroller: ViewportScroller) {}

  scroll(id: string) {
    let offset = this.brandElement?.nativeElement?.offsetHeight ?? 64;
    this.viewportScroller.setOffset([0, offset]);
    this.viewportScroller.scrollToAnchor(id);
  }
}
