import { Component } from '@angular/core';

@Component({
  selector: 'app-donde-ver',
  templateUrl: './donde-ver.component.html',
  styleUrl: './donde-ver.component.css'
})

export class DondeVerComponent {
  currentIndex: number = 0;
  animes = [
    { title: 'Crunchyroll', img: 'assets/streaming/Crunch.jpeg' },
    { title: 'AnimeFLV', img: 'assets/streaming/flv.jpg' },
    { title: 'Funimation', img: 'assets/streaming/Fun.png' },
    {title: 'Anime Planet', img: 'assets/streaming/planet2.jpeg'},
    {title: 'MagisTV', img: 'assets/streaming/magis.jpg'},
    {title: 'HiAnime', img: 'assets/streaming/HiAnime.jpeg'},
    {title: 'Netflix', img: 'assets/streaming/netflix.jpeg'},
    {title: 'PlutoTV', img: 'assets/streaming/pluto.jpeg'}
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
