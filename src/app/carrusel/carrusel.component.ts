import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  currentIndex: number = 0;
  animes = [
    { title: 'Re:Zero', img: 'assets/carrusel/re.jpeg' },
    { title: 'Danmanchi', img: 'assets/carrusel/bell.jpg' },
    { title: 'Tokyo Ghoul', img: 'assets/carrusel/GHOUL.jpeg' },
    {title: 'Kekkai sense', img: 'assets/carrusel/kekkai.jpeg'},
    {title: 'Solo leveling', img: 'assets/carrusel/solo-leveling-vol-02-gn-manga.jpg'},
    {title: 'Fieren', img: 'assets/carrusel/Fieren.jpg'},
    {title: 'To your eternity', img: 'assets/carrusel/eternity.jpeg'},
    {title: 'Classroom of the elite', img: 'assets/carrusel/R.jpg'}
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
