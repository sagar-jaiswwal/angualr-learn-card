import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() heading: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() number: string = '';
  @Input() city: string = '';
  @Input() state: string = '';

  dropdownOpen = false;

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  handleAction(action: string) {
    this.dropdownOpen = false;
  }
}
