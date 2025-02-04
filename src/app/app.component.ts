import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDesktop = false;
  isBurgerMenuVisible = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log('resized');
    this.isDesktop = window.innerWidth > 945;
    this.isBurgerMenuVisible = window.innerWidth < 780;
  }
}
