import { Component } from '@angular/core';
import { TopAnimes } from '../interfaces/top-animes';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  animesTop: TopAnimes[] = [
    {
      top: 1,
      name: 'Shonen',
      sinopsis: 'Enfocado en un público juvenil masculino, suele incluir acción, aventuras, amistad y superación. Ejemplos: Naruto, Dragon Ball.',
      content: 'Fecha de estreno: Finales de 2024',
      img: 'assets/categorys/shone.jpg',
      fechaEstreno: new Date('2024-12-01')
    },
    {
      top: 2,
      name: 'Shojo',
      sinopsis: 'Dirigido a un público femenino joven, con temas de romance, drama y crecimiento personal. Ejemplos: Sailor Moon, Fruits Basket.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/categorys/shojo.jpeg',
      fechaEstreno: new Date('2024-10-10')
    },
    {
      top: 3,
      name: 'Seinen',
      sinopsis: 'Para un público más adulto, con tramas más complejas y temas maduros, incluyendo violencia o dilemas existenciales. Ejemplos: Berserk, Tokyo Ghoul.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/categorys/seinen.jpeg',
      fechaEstreno: new Date('2024-08-08')
    },
    {
      top: 4,
      name: 'Josei',
      sinopsis: 'Similar al shojo, pero dirigido a mujeres adultas, con un enfoque en relaciones románticas más realistas y temas cotidianos. Ejemplos: Nodame Cantabile, Honey and Clover.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/categorys/josei.jpg',
      fechaEstreno: new Date('2024-11-15')
    },
    {
      top: 5,
      name: 'Mecha',
      sinopsis: 'Animes centrados en robots gigantes y tecnología avanzada, combinando ciencia ficción y acción. Ejemplos: Gundam, Neon Genesis Evangelion.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/categorys/mecha.jpeg',
      fechaEstreno: new Date('2024-09-09')
    }
  ];
}
