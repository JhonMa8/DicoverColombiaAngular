import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cities: City[];

  constructor(private cityService: CityService) {
    this.cities = this.cityService.getCities();
  }
}