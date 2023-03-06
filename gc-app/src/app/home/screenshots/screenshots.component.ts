import { Component } from '@angular/core';
import { Gallery } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Screenshot } from './screenshot.type';

@Component({
  selector: 'gc-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.scss']
})
export class ScreenshotsComponent {
  screenshots: Screenshot[];

  constructor(private gallery : Gallery, private lightbox: Lightbox) {
    this.screenshots = [
      {
        src: '/assets/img/screenshots/sc1.png'
      },
      {
        src: '/assets/img/screenshots/sc2.png'
      },
      {
        src: '/assets/img/screenshots/sc3.png'
      },
      {
        src: '/assets/img/screenshots/sc4.png'
      },
    ];

    this.gallery.ref('screenshots').setConfig({
      dots: true
    });
  }
}
