import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ScreenshotsComponent } from './home/screenshots/screenshots.component';
import { FeaturesComponent } from './home/features/features.component';
import { AuthorsComponent } from './home/authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    NavbarComponent,
    FooterComponent,
    ScreenshotsComponent,
    FeaturesComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdbCollapseModule,
    GalleryModule,
    LightboxModule.withConfig({
      panelClass: 'fullscreen'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
