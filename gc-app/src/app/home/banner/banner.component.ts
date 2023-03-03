import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core'

@Component({
  selector: 'gc-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  constructor(private renderer: Renderer2) {}

  download() {
    const href = '/assets/img/banner_bg1.png';
    const filename = 'banner_bg_downloaded.png';
    const link = this.renderer.createElement('a') as HTMLElement;
    link.setAttribute('target', '_blank');
    link.setAttribute('href', href);
    link.setAttribute('download', filename);
    link.click();
    link.remove();
  }
}
