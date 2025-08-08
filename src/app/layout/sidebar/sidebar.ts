import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  isCollapsed = false;

  menuItems = [
    { label: 'CAfirm', route: '/cafirm', icon: '✅' },
    { label: 'Requested', route: '/requested', icon: '📥' },
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
