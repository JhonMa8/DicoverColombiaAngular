import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCardComponent } from '../../components/city-card/city-card.component';
import { CityService } from '../../services/city.service';
import { City } from '../../models/city.model';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CityCardComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cities: City[];

  constructor(private cityService: CityService) {
    this.cities = this.cityService.getCities();
  }
}