// src/app/components/cookie-consent/cookie-consent.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentService } from '../../services/cookie-consent'; // Lo crearemos en el siguiente paso

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-consent.html',
  styleUrls: ['./cookie-consent.css']
})
export class CookieConsentComponent implements OnInit {
  showBanner: boolean = false;

  constructor(private cookieConsentService: CookieConsentService) { }

  ngOnInit(): void {
    // Suscribirse al estado del consentimiento para mostrar/ocultar el banner
    this.cookieConsentService.getConsentStatus().subscribe(status => {
      this.showBanner = status;
    });
  }

  acceptCookies(): void {
    this.cookieConsentService.acceptConsent();
  }

  declineCookies(): void {
    this.cookieConsentService.declineConsent();
  }
}