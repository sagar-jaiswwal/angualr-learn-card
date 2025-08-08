import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination {
  @Input() totalItems = 0;
  @Input() pageSize = 2;
  @Output() pageChange = new EventEmitter<number>();

  @Input() currentPage = 1;
  totalPages = 0;
  pages: number[] = [];

  ngOnChanges(): void {
    this.calculatePages();
  }

  calculatePages() {
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  selectPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.selectPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.selectPage(this.currentPage + 1);
    }
  }
}
