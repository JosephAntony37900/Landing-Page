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
    { title: 'Tokyo Ghoul', img: 'assets/carrusel/GHOUL.jpeg' }
  ];

  goNext() {
    this.currentIndex = (this.currentIndex + 1) % this.animes.length;
  }

  goPrevious() {
    this.currentIndex = (this.currentIndex - 1 + this.animes.length) % this.animes.length;
  }
}
