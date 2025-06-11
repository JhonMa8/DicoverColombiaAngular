// src/app/components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de que CommonModule esté importado
import { RouterLink } from '@angular/router'; // Asegúrate de que RouterLink esté importado si usas routerLink en el footer

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule], // Añade RouterLink aquí
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
  }
}