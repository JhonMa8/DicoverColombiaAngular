// src/app/pages/city-detail/city-detail.component.ts

import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-city-detail',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit, OnDestroy {
  city: City | undefined;
  private route = inject(ActivatedRoute);
  private cityService = inject(CityService);

  // PROPIEDADES PARA EL CARRUSEL MANUAL
  currentSlideIndex: number = 0;
  private slideInterval: any;

  // PROPIEDAD PARA EL ACORDEÓN: un objeto para rastrear el estado de cada sección
  accordionStates: { [key: string]: boolean } = {
    description: true, // Por defecto, la descripción puede estar abierta
    climate: false,
    bestTime: false,
    attractions: false
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.city = this.cityService.getCityById(id);
        this.currentSlideIndex = 0; // Reinicia el slide al cambiar de ciudad
        this.startAutoSlide();      // Inicia el auto-avance

        // Reinicia los estados del acordeón al cargar una nueva ciudad
        this.accordionStates = {
          description: true,
          climate: false,
          bestTime: false,
          attractions: false
        };
      }
    });
  }

  // MÉTODOS PARA EL CARRUSEL MANUAL
  prevSlide(): void {
    if (this.city && this.city.imageUrls.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex === 0) ?
                               this.city.imageUrls.length - 1 :
                               this.currentSlideIndex - 1;
      this.resetAutoSlide();
    }
  }

  nextSlide(): void {
    if (this.city && this.city.imageUrls.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex === this.city.imageUrls.length - 1) ?
                               0 :
                               this.currentSlideIndex + 1;
      this.resetAutoSlide();
    }
  }

  goToSlide(index: number): void {
    if (this.city && index >= 0 && index < this.city.imageUrls.length) {
      this.currentSlideIndex = index;
      this.resetAutoSlide();
    }
  }

  startAutoSlide(): void {
    this.stopAutoSlide();
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 5000ms = 5 segundos (ya lo habías ajustado)
  }

  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  resetAutoSlide(): void {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // MÉTODO PARA EL ACORDEÓN: alterna el estado de una sección
  toggleAccordion(section: string): void {
    this.accordionStates[section] = !this.accordionStates[section];
  }
}