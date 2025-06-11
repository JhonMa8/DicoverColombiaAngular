import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-city-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent {
  @Input() city!: City;
}