import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-anuncioinicio',
  templateUrl: './anuncioinicio.component.html',
  styleUrls: ['./anuncioinicio.component.scss']
})
export class AnuncioinicioComponent {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit(); // Emitimos un evento para cerrar el modal
  }
}
