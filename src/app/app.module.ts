import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarHeaderComponent } from './navbar-header/navbar-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { AboutTheSiteComponent } from './about-the-site/about-the-site.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { AboutComponent } from './about/about.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { BlogModalComponent } from './blog-modal/blog-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NavbarHeaderComponent,
    HeaderComponent,
    AboutTheSiteComponent,
    BlogGridComponent,
    AboutComponent,
    ClientsComponent,
    ContactUsComponent,
    FooterComponent,
    BlogModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
