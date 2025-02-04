import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss'],
})
export class ProductsDisplayComponent implements OnInit {
  @Input() productImages: string[] = [];

  isMobileView: boolean = false;
  slideIndices: number[] = [];
  currentIndex: number = 0;

  ngOnInit() {
    this.checkScreenSize();
    this.slideIndices = new Array(this.productImages.length)
      .fill(0)
      .map((_, i) => i);
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
