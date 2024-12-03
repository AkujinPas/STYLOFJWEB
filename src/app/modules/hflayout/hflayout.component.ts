import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-hflayout',
  templateUrl: './hflayout.component.html',
  styleUrls: ['./hflayout.component.scss']
})
export class HflayoutComponent {

  isModalOpen = true;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}