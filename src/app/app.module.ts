import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { SectionTitleComponent } from './section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CarruselComponent,
    WelcomeComponent,
    AnimeCardComponent,
    SectionTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
