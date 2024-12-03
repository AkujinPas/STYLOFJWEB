import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-process',
  templateUrl: './address-process.component.html',
  styleUrls: ['./address-process.component.scss']
})
export class AddressProcessComponent implements OnInit {

  ngOnInit(): void {
    // Llamar a la función que gestiona la visibilidad de los elementos
    this.toggleHomeDeliveryOptions();

    // Agregar los eventos para manejar los cambios en los radios
    this.addEventListeners();
  }

  // Función que maneja la visibilidad del formulario o mapa según la opción seleccionada
  toggleHomeDeliveryOptions() {
    const pickupStoreRadio = <HTMLInputElement>document.getElementById('pickup-store');
    const homeDeliveryRadio = <HTMLInputElement>document.getElementById('home-delivery');
    const addAddressRadio = <HTMLInputElement>document.getElementById('add-address');
    const storeLocation = <HTMLDivElement>document.getElementById('store-location');
    const addressForm = <HTMLDivElement>document.getElementById('address-form');
    const homeDeliveryOptions = <HTMLDivElement>document.getElementById('home-delivery-options');

    if (homeDeliveryRadio?.checked) {
      homeDeliveryOptions.style.display = 'block';  // Mostrar opciones adicionales
    } else {
      homeDeliveryOptions.style.display = 'none';  // Ocultar opciones adicionales
    }

    if (addAddressRadio?.checked) {
      storeLocation.style.display = 'none';  // Ocultar el mapa
      addressForm.style.display = 'block';   // Mostrar el formulario de dirección
    } else {
      storeLocation.style.display = 'block';  // Mostrar el mapa
      addressForm.style.display = 'none';     // Ocultar el formulario de dirección
    }
  }

  // Función para agregar los event listeners a los radios
  addEventListeners() {
    const pickupStoreRadio = <HTMLInputElement>document.getElementById('pickup-store');
    const homeDeliveryRadio = <HTMLInputElement>document.getElementById('home-delivery');
    const addAddressRadio = <HTMLInputElement>document.getElementById('add-address');

    pickupStoreRadio?.addEventListener('change', () => this.toggleHomeDeliveryOptions());
    homeDeliveryRadio?.addEventListener('change', () => this.toggleHomeDeliveryOptions());
    addAddressRadio?.addEventListener('change', () => this.toggleHomeDeliveryOptions());
  }
}