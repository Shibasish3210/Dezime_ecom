import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-select-space',
  templateUrl: './select-space.component.html',
  styleUrls: ['./select-space.component.scss'],
})
export class SelectSpaceComponent {
  spaces = ['First Floor', 'Second Floor', 'Living Room'];

  products = [
    {
      space: 'Master Bathroom',
      size: '14FT X 20FT',
      cost: 23700,
      applied: false,
    },
    {
      space: 'Master Bathroom',
      size: '14FT X 20FT',
      cost: 23700,
      applied: false,
    },
    {
      space: 'Master Bathroom',
      size: '14FT X 20FT',
      cost: -23700,
      applied: false,
    },
  ];

  isOpen = false;

  get totalCost() {
    return this.products.reduce(
      (sum, item) => sum + (item.applied ? item.cost : 0),
      0
    );
  }

  toggleApply(item: any) {
    item.applied = !item.applied;
  }

  isExpanded = false;
  isDesktop = window.innerWidth > 768;

  costItems = [
    { amount: 23700, applied: false },
    { amount: -23700, applied: false },
    { amount: 2000, applied: true },
  ];

  toggleExpand() {
    if (!this.isDesktop) {
      this.isExpanded = !this.isExpanded;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isDesktop = window.innerWidth > 768;
  }
}
