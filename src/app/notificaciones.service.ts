import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificacionesService {
  constructor() {}
  notificacion(mensaje: string) {
    alert(mensaje);
  }
}
