import { Component } from '@angular/core';
type Product = {
  name: string;
  description: string;
  price: number;
  applicationCost: number;
  details: string;
  imageUrl: string[];
  variations: string[];
};

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  productDetails: Product = {
    name: 'Product Name',
    price: 350,
    applicationCost: 200,
    imageUrl: [
      'assets/images/main_product.png',
      'assets/images/main_product.png',
      'assets/images/main_product.png',
      'assets/images/main_product.png',
    ],
    description: `52% Wool 48% Viscose, Modern, Hand Tufted, Handmade in Rural India, 6 Months Warranty, Indoor Use Only.`,
    details: `A painting of the cosmos, the Genesis collection is an interpretation of what our worlds would look like before they couldn’t even be seen. The collection showcases pastel colors and vague shapes coexist with the hopes of blending into a concrete idea. Made from the finest quality wool and viscose, each rug is precisely hand-tufted by experienced artisans. Designed with resilience against everyday wear and tear, the collection is perfect for any room in your house.`,
    variations: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
  };
}
