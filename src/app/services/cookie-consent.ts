// src/app/services/cookie-consent.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la aplicación
})
export class CookieConsentService {
  // Clave para almacenar el consentimiento en localStorage
  private readonly CONSENT_KEY = 'cookie_consent_accepted';
  // Duración del consentimiento en días (ej: 30 días)
  private readonly CONSENT_EXPIRATION_DAYS = 30;

  // BehaviorSubject para emitir el estado actual del banner (true = mostrar, false = ocultar)
  // Inicialmente, el banner se mostrará si el consentimiento NO ha sido aceptado o ha expirado.
  private showBannerSubject = new BehaviorSubject<boolean>(this.shouldShowConsentBanner());

  constructor() { }

  /**
   * Retorna un Observable para que el componente del banner sepa si debe mostrarse.
   */
  getConsentStatus(): Observable<boolean> {
    return this.showBannerSubject.asObservable();
  }

  /**
   * Verifica si el banner de consentimiento debe mostrarse.
   * Se mostrará si NO hay un consentimiento aceptado o si el consentimiento ha expirado.
   */
  private shouldShowConsentBanner(): boolean {
    const consent = localStorage.getItem(this.CONSENT_KEY);

    if (!consent) {
      return true; // No hay consentimiento guardado, mostrar banner
    }

    const consentDate = new Date(consent);
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() - this.CONSENT_EXPIRATION_DAYS);

    // Si la fecha de consentimiento es anterior a la fecha de expiración, mostrar banner
    return consentDate < expirationDate;
  }

  /**
   * Guarda el consentimiento del usuario y oculta el banner.
   */
  acceptConsent(): void {
    const now = new Date();
    localStorage.setItem(this.CONSENT_KEY, now.toISOString()); // Guarda la fecha actual
    this.showBannerSubject.next(false); // Oculta el banner
  }

  /**
   * Esta función es para cuando el usuario rechaza.
   * Podrías decidir qué hacer aquí (por ejemplo, redirigir, deshabilitar funcionalidades, etc.).
   * Por simplicidad, por ahora simplemente oculta el banner y no guarda consentimiento explícito,
   * lo que hará que el banner reaparezca en la siguiente visita si no hay un consentimiento previo.
   */
  declineConsent(): void {
    // Si el usuario rechaza, simplemente ocultamos el banner por esta sesión.
    // No guardamos una fecha de aceptación, por lo que reaparecerá en la próxima visita
    // a menos que decidas guardar un "rechazo" explícito por un tiempo.
    this.showBannerSubject.next(false);
    // Opcional: Podrías querer eliminar el consentimiento si existía y el usuario lo revoca.
    // localStorage.removeItem(this.CONSENT_KEY);
  }

  /**
   * Opcional: Para pruebas, puedes restablecer el estado del consentimiento.
   */
  resetConsent(): void {
    localStorage.removeItem(this.CONSENT_KEY);
    this.showBannerSubject.next(true); // Vuelve a mostrar el banner
  }
}
