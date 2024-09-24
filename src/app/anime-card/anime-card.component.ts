import { Component, Input } from '@angular/core';
import { EstrenosAnimes } from '../interfaces/estrenos-animes';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.css'
})
export class AnimeCardComponent {
  @Input() animes!: { title: string, img: string };
}
