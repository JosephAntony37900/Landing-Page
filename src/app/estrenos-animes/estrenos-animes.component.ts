import { Component } from '@angular/core';
import { TopAnimes } from '../interfaces/top-animes';

@Component({
  selector: 'app-estrenos-animes',
  templateUrl: './estrenos-animes.component.html',
  styleUrl: './estrenos-animes.component.css'
})
export class EstrenosAnimesComponent {
  animesTop: TopAnimes[] = [
    {
      top: 1,
      name: 'Solo leveling Season 2',
      sinopsis: 'Lo que no te mata te hace más fuerte, pero en el caso de Sung Jinwoo, lo que lo mató lo hizo más fuerte. Después de ser brutalmente asesinado por monstruos en una mazmorra de alto rango, Jinwoo regresó con el Sistema, un programa que solo él puede ver y que eleva su nivel en todos los sentidos.',
      content: 'Fecha de estreno: Finales de 2024',
      img: 'assets/top/Solo-Level.jpg',
      fechaEstreno: new Date('2024-12-01')
    },
    {
      top: 2,
      name: 'Danmanchi Season 5',
      sinopsis: 'Bell es un aventurero novato normal y corriente que sueña con hacerse rico y conocer chicas en la Mazmorra. Junto con la menuda y pizpireta diosa Hestia, funda una familia y empieza sus días de exploración con la idea de llenarse los bolsillos.Un día una bella joven de cabellos y ojos dorados llamada Aiz Wallenstein, la Princesa de la Espada, le salva del ataque de un minotauro, y Bell decide que quiere ser tan fuerte como ella…',
      content: 'Fecha de estreno: 2024',
      img: 'assets/top/DanManchi.png',
      fechaEstreno: new Date('2024-10-10')
    },
    {
      top: 3,
      name: 'Re: Zero Season 3',
      sinopsis: 'Cuando Subaru Natsuki deja la tienda de conveniencia, lo último que espera es ser arrancado de su vida diaria y caer en un mundo de fantasía. Las cosas no se ven bien para el confuso adolescente; Sin embargo, poco después de su llegada, es atacado por algunos tipos malos. Armado con solo una bolsa de comestibles y ahora un teléfono celular inútil, se golpea rápidamente en una pulpa. Afortunadamente, una misteriosa belleza llamada Satella, en Hot Chase después de la que robó su insignia, ocurre Subaru y lo salva. Para agradecer a la niña honesta y amable, Subaru ofrece ayudarla a buscar y más tarde esa noche incluso encuentra el paradero de lo que busca. Pero sin su conocimiento, una fuerza mucho más oscura persigue el par de las sombras, y solo unos minutos después de localizar la insignia, Subaru y Satella son brutalmente asesinados.Sin embargo, Subaru inmediatamente vuelve a ser una escena familiar, confrontada por el mismo grupo de bandidos, encontrando a Satella nuevamente, el rompecabezas se profundiza a medida que la historia se repite inexplicablemente.',
      content: 'Fecha de estreno: 2024',
      img: 'assets/top/zero.png',
      fechaEstreno: new Date('2024-08-08')
    }
  ];
}
