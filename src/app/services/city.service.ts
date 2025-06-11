// src/app/services/city.service.ts
import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private imageBasePath: string = 'images/';

  private cities: City[] = [
    {
      id: 'bogota',
      name: 'Bogotá',
      description: 'La capital de Colombia, ubicada en la cordillera de los Andes. Conocida por su rica historia y cultura.',
      attractions: ['Monserrate', 'Museo del Oro', 'La Candelaria', 'Plaza de Bolívar'],
      // ¡CAMBIA ESTO! Debe ser 'imageUrls' y un array.
      imageUrls: [
        this.imageBasePath + 'bogota-1.jpg', // Asegúrate de tener estas imágenes
        this.imageBasePath + 'bogota-2.jpg',
        this.imageBasePath + 'bogota-3.jpg',
        this.imageBasePath + 'bogota-4.jpg'
      ],
      climate: 'Frío (14°C promedio)',
      bestTime: 'Todo el año (especialmente Diciembre-Enero)'
    },
    {
      id: 'medellin',
      name: 'Medellín',
      description: 'Ciudad de la eterna primavera, innovadora y llena de vida. Transformación urbana ejemplar.',
      attractions: ['Comuna 13', 'Pueblito Paisa', 'Jardín Botánico', 'Parque Arví'],
      // ¡CAMBIA ESTO!
      imageUrls: [
        this.imageBasePath + 'medellin-1.jpg',
        this.imageBasePath + 'medellin-2.jpg',
        this.imageBasePath + 'medellin-3.jpg',
        this.imageBasePath + 'medellin-4.jpg'
      ],
      climate: 'Templado (22°C promedio)',
      bestTime: 'Enero-Febrero y Julio-Agosto'
    },
    {
      id: 'cartagena',
      name: 'Cartagena',
      description: 'Joyas colonial caribeña con playas paradisíacas y murallas históricas. Patrimonio de la Humanidad.',
      attractions: ['Ciudad Amurallada', 'Castillo San Felipe', 'Playa Blanca', 'Islas del Rosario'],
      // ¡CAMBIA ESTO!
      imageUrls: [
        this.imageBasePath + 'cartagena-1.jpg',
        this.imageBasePath + 'cartagena-2.jpg',
        this.imageBasePath + 'cartagena-3.jpg',
        this.imageBasePath + 'cartagena-4.jpg'
      ],
      climate: 'Cálido (30°C promedio)',
      bestTime: 'Diciembre-Abril (temporada seca)'
    },
    {
      id: 'cali',
      name: 'Cali',
      description: 'Capital mundial de la salsa. Ciudad rítmica con paisajes verdes y energía contagiosa.',
      attractions: ['El Cristo Rey', 'Zoológico de Cali', 'Barrio San Antonio', 'Plaza de Caicedo'],
      // ¡CAMBIA ESTO!
      imageUrls: [
        this.imageBasePath + 'cali-1.jpg',
        this.imageBasePath + 'cali-2.jpg',
        this.imageBasePath + 'cali-3.jpg',
        this.imageBasePath + 'cali-4.jpg'
      ],
      climate: 'Cálido (25°C promedio)',
      bestTime: 'Junio-Agosto (Feria de Cali)'
    }
  ];

  getCities(): City[] {
    return this.cities;
  }

  getCityById(id: string): City | undefined {
    return this.cities.find(city => city.id === id);
  }
}