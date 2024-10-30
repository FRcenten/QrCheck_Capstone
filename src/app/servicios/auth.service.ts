import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

interface User {
  rut: string;
  contraseña: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firestore: AngularFirestore, private router: Router) {}

  // Método de login
  login(rut: string, password: string) {
    console.log('estoy en auth service')
  }

  // Método para manejar roles
  handleUserRole(rol: string) {
    if (rol === 'trabajador') {
      this.router.navigate(['/trabajador']);
    } else if (rol === 'local') {
      this.router.navigate(['/local']);
    } else if (rol === 'general') {
      this.router.navigate(['/general']);
    } else {
      alert('Rol no reconocido');
    }
  }
}
