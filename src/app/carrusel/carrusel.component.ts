import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  currentIndex: number = 0;
  animes = [
    { title: 'Re:Zero', img: 'assets/carrusel/re.jpeg' },
    { title: 'White-haired Warrior', img: 'assets/carrusel/bell.jpg' },
    { title: 'Tokyo Ghoul', img: 'assets/carrusel/GHOUL.jpeg' },
    {title: 'kekkai sense', img: 'assets/carrusel/kekkai.jpeg'},
    {title: 'solo leveling', img: 'assets/carrusel/solo-leveling-vol-02-gn-manga.jpg'}
  ];

  goNext() {
    this.currentIndex = (this.currentIndex + 4) % this.animes.length;
  }
  
  goPrevious() {
    this.currentIndex = (this.currentIndex - 4 + this.animes.length) % this.animes.length;
  }
  

  getVisibleAnimes() {
    return this.animes.slice(this.currentIndex, this.currentIndex + 4);
  }
  
}
