// src/app/components/currency-converter/currency-converter.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // Importa CurrencyPipe
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink], // Añade FormsModule aquí
  templateUrl: './currency-converter.html',
  styleUrls: ['./currency-converter.css']
})
export class CurrencyConverterComponent implements OnInit {
  usdAmount: number = 1; // Cantidad en USD ingresada por el usuario
  convertedAmount: number = 0; // Cantidad convertida a COP
  exchangeRate: number = 4190.80; // Tipo de cambio USD a COP (actualizado el 11 de junio de 2025)

  constructor() { }

  ngOnInit(): void {
    // Realiza la conversión inicial al cargar el componente
    this.convertCurrency();
  }

  /**
   * Realiza la conversión de USD a COP.
   */
  convertCurrency(): void {
    // Asegúrate de que usdAmount sea un número válido y no negativo
    if (this.usdAmount === null || this.usdAmount < 0) {
      this.convertedAmount = 0;
      return;
    }
    this.convertedAmount = this.usdAmount * this.exchangeRate;
  }
}