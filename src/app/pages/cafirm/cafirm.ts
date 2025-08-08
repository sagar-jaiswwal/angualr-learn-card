import { Component, Pipe } from '@angular/core';
import { Card } from '../../common/card/card';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Pagination } from '../../common/pagination/pagination';
import { FormsModule } from '@angular/forms';

interface CardData {
  heading: string;
  name: string;
  id: string;
  number: string;
  city: string;
  state: string;
  status: string;
}

@Component({
  selector: 'app-cafirm',
  imports: [Card, Pagination, FormsModule],
  templateUrl: './cafirm.html',
  styleUrl: './cafirm.scss',
})
export class Cafirm {
  currentPath: string = '';
  selectedTab: string = 'active';

  cards: CardData[] = [
    // --- Active ---
    {
      heading: 'Mehta and Sons',
      name: 'John Doe',
      id: 'A1001',
      number: '9876543210',
      city: 'Ahmedabad',
      state: 'Gujarat',
      status: 'active',
    },
    {
      heading: 'Aditya Enterprises',
      name: 'Amit Sharma',
      id: 'A1002',
      number: '9123456789',
      city: 'Rajkot',
      state: 'Gujarat',
      status: 'active',
    },
    {
      heading: 'Greenline Pvt Ltd',
      name: 'Suresh Mehta',
      id: 'A1003',
      number: '9001234567',
      city: 'Bhavnagar',
      state: 'Gujarat',
      status: 'active',
    },
    {
      heading: 'Metro Traders',
      name: 'Rahul Jain',
      id: 'A1004',
      number: '9812345670',
      city: 'Jamnagar',
      state: 'Gujarat',
      status: 'active',
    },
    {
      heading: 'Sunrise Traders',
      name: 'Karan Patel',
      id: 'A1005',
      number: '9898989898',
      city: 'Surendranagar',
      state: 'Gujarat',
      status: 'active',
    },

    // --- Inactive ---
    {
      heading: 'Patel Traders',
      name: 'Jane Smith',
      id: 'I2001',
      number: '1234567890',
      city: 'Surat',
      state: 'Gujarat',
      status: 'inactive',
    },
    {
      heading: 'Motilal Traders',
      name: 'Nisha Joshi',
      id: 'I2002',
      number: '9345612789',
      city: 'Rajkot',
      state: 'Gujarat',
      status: 'inactive',
    },
    {
      heading: 'Birla Textiles',
      name: 'Vinod Rao',
      id: 'I2003',
      number: '9023456781',
      city: 'Bharuch',
      state: 'Gujarat',
      status: 'inactive',
    },
    {
      heading: 'Western Suppliers',
      name: 'Manoj Bhatt',
      id: 'I2004',
      number: '9934567812',
      city: 'Junagadh',
      state: 'Gujarat',
      status: 'inactive',
    },
    {
      heading: 'Adani Traders',
      name: 'Sneha Shah',
      id: 'I2005',
      number: '9845612390',
      city: 'Navsari',
      state: 'Gujarat',
      status: 'inactive',
    },

    // --- Debarred ---
    {
      heading: 'Kumar Textiles',
      name: 'Ravi Kumar',
      id: 'D3001',
      number: '9999999999',
      city: 'Vadodara',
      state: 'Gujarat',
      status: 'debarred',
    },
    {
      heading: 'Tiwari Exports',
      name: 'Anjali Tiwari',
      id: 'D3002',
      number: '8888888888',
      city: 'Gandhinagar',
      state: 'Gujarat',
      status: 'debarred',
    },
    {
      heading: 'Royal Suppliers',
      name: 'Harsh Modi',
      id: 'D3003',
      number: '8778778778',
      city: 'Valsad',
      state: 'Gujarat',
      status: 'debarred',
    },
    {
      heading: 'Urban Mart',
      name: 'Pooja Desai',
      id: 'D3004',
      number: '8668668666',
      city: 'Bhuj',
      state: 'Gujarat',
      status: 'debarred',
    },
    {
      heading: 'Pioneer Goods',
      name: 'Yash Thakkar',
      id: 'D3005',
      number: '8558558555',
      city: 'Porbandar',
      state: 'Gujarat',
      status: 'debarred',
    },
  ];

  searchTerm: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    const route = this.router.url.replace('/', ''); // remove slash
    this.currentPath = `Home > ${this.capitalize(route)}`;
    this.updatePaginatedCards();
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  get filteredCards() {
    return this.cards.filter((card) => {
      const matchesStatus = card.status === this.selectedTab;
      const matchesSearch = this.searchTerm
        ? card.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          card.heading.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          card.city.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          card.id.includes(this.searchTerm)
        : true;

      return matchesStatus && matchesSearch;
    });
  }

  setTab(tab: string) {
    this.selectedTab = tab;
    this.currentPage = 1;
    this.updatePaginatedCards();
  }

  paginatedCards: CardData[] = [];
  pageSize = 2;
  currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePaginatedCards();
  }

  updatePaginatedCards() {
    const filtered = this.filteredCards;
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedCards = filtered.slice(start, end);
  }
  onSearchChange() {
    this.currentPage = 1;
    this.updatePaginatedCards();
  }
  listView = true;
  selectedCard: CardData | null = null;

  onCardView(card: CardData) {
    this.selectedCard = card;
    this.listView = false;
  }
  backToList() {
    this.selectedCard = null;
    this.listView = true;
  }
  onCardAction(event: { type: string; data: any }) {
    if (event.type === 'view') {
      this.selectedCard = event.data;
      this.listView = false;
    }

    // Add other logic for add/edit/delete if needed
  }
}
