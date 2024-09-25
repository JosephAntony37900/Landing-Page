import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { RouterModule, Routes } from '@angular/router';
import { MasVistosComponent } from './mas-vistos/mas-vistos.component';
import { EstrenosAnimesComponent } from './estrenos-animes/estrenos-animes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DondeVerComponent } from './donde-ver/donde-ver.component';
import { TopMejoresAnimesComponent } from './top-mejores-animes/top-mejores-animes.component';

const router: Routes = [
  {path: "", component: WelcomeComponent,},
  {path: "vistos", component: MasVistosComponent},
  {path: "estrenos", component: CarruselComponent},
  {path: "categorias", component: CategoriasComponent},
  {path: "ver", component: DondeVerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CarruselComponent,
    WelcomeComponent,
    AnimeCardComponent,
    SectionTitleComponent,
    MasVistosComponent,
    EstrenosAnimesComponent,
    CategoriasComponent,
    DondeVerComponent,
    TopMejoresAnimesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
