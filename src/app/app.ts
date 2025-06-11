// src/app/app.ts

import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CookieConsentComponent
  ],
  templateUrl: './app.html', 
  
})
export class AppComponent implements OnInit {
  title = 'pagina_turismo';



  ngOnInit() {
    // Puedes inicializar algo aquí si lo necesitas
  }

  
  // Método para desplazar la ventana a la parte superior suavemente
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hace que el desplazamiento sea suave
    });
  }
}