import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.component.html',
  styleUrls: ['./lector-qr.component.scss'],
})
export class LectorQrComponent  implements OnInit {
  scannedResult: string = '';
  isScanning: boolean = false;

  constructor(private platform: Platform) { }

  ngOnInit() {}
  async startScan() {
    // Verificar si la plataforma es móvil
    if (this.platform.is('capacitor')) {
      this.isScanning = true;
      
      // Comprobar si hay permisos de cámara
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // Ocultar la webview para que la cámara se vea completamente
        BarcodeScanner.hideBackground();

        // Iniciar el escaneo
        const result = await BarcodeScanner.startScan(); // Permanece en espera hasta que se escanee algo

        // Detener el escaneo
        this.isScanning = false;

        if (result.hasContent) {
          // Si se escaneó correctamente
          this.scannedResult = result.content;  // El contenido del código QR escaneado
        } else {
          console.log('No se detectó ningún contenido');
        }
      } else {
        console.log('Permiso de cámara denegado');
      }
    }
  }

  stopScan() {
    // Detener el escaneo si es necesario
    BarcodeScanner.stopScan();
    this.isScanning = false;
  }
}

