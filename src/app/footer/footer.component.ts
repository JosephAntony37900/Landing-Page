import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  showBackToTop: boolean = true;  // Inicialmente mostrar el círculo

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Escucha cambios de ruta
    this.router.events.subscribe(() => {
      // Define las rutas donde no quieres mostrar el círculo
      const noCircleRoutes = ['/ver'];
      
      if (noCircleRoutes.includes(this.router.url)) {
        this.showBackToTop = false;  // Ocultar el círculo en estas rutas
      } else {
        this.showBackToTop = true;   // Mostrar el círculo en otras rutas
      }
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
