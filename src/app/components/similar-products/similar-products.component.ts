import { Component } from '@angular/core';
type Product = { name: string; price: string; imageUrl: string };

const product : Product = {
  name: "Tiled flooring",
  price: "1200",
  imageUrl: "assets/images/terracotta_tiles.png"
}
@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
})
export class SimilarProductsComponent {
  similarProducts: Product[] = new Array(4).fill(product);
}
