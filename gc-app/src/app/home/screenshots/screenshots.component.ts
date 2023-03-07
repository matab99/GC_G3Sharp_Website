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
    this.screenshots = Array(6).fill(0).map((e, i) => ({
      src: `/assets/img/screenshots/s${i + 1}.png`
    }));

    this.gallery.ref('screenshots').setConfig({
      dots: true
    });
  }
}
