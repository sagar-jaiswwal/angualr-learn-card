import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() status: string = '';
  @Output() action = new EventEmitter<{ type: string; data: any }>();
  dropdownOpen = false;

  toggleDropdown(event: MouseEvent) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  handleAction(type: string) {
    this.action.emit({
      type,
      data: {
        heading: this.heading,
        name: this.name,
        id: this.id,
        number: this.number,
        city: this.city,
        state: this.state,
        status: this.status,
      },
    });
    this.dropdownOpen = false;
  }
}
