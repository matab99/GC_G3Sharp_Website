import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'gc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scroll(id: string) {
    this.viewportScroller.scrollToAnchor(id);
  }
}
