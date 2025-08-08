import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [Header, RouterOutlet, Footer, Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
