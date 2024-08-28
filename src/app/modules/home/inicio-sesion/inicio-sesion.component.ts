import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent {
  @Input() data: any;
  @Output() closeModal = new EventEmitter();

  onCloseModal(): void {
    this.closeModal.emit();
  }
}
