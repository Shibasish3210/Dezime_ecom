import { Component } from '@angular/core';

@Component({
  selector: 'app-product-variations',
  templateUrl: './product-variations.component.html',
  styleUrls: ['./product-variations.component.scss'],
})
export class ProductVariationsComponent {
  heights: string[] = ['12 inch', '24 inch', '36 inch'];
  widths: string[] = ['12 inch', '24 inch', '36 inch'];

  stackableQuantity: number = 1;

  productTypes = [
    {
      name: 'Type 1',
      allowMultiple: false,
      isStackable: true,
      products: [
        { image: 'assets/images/wood.png', label: 'Label', selected: false },
        { image: 'assets/images/wood_2.png', label: 'Label', selected: false },
        {
          image: 'assets/images/wood_pile.png',
          label: 'Label',
          selected: false,
        },
        {
          image: 'assets/images/wood_pile.png',
          label: 'Label',
          selected: false,
        },
        {
          image: 'assets/images/wood_pile.png',
          label: 'Label',
          selected: false,
        },
        {
          image: 'assets/images/wood_pile.png',
          label: 'Label',
          selected: false,
        },
      ],
    },
    {
      name: 'Type 2',
      allowMultiple: true,
      products: [
        {
          image: 'assets/images/wood_pile.png',
          label: 'Label',
          selected: false,
        },
        {
          image: 'assets/images/wood_pile.png',
          label: 'Label',
          selected: false,
        },
        {
          image: 'assets/images/wood_pile.png',
          label: 'Label',
          selected: false,
        },
      ],
    },
    {
      name: '',
      allowMultiple: false,
      productArray: [
        {
          name: '3',
          allowMultiple: false,
          products: [
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
          ],
        },
        {
          name: '4',
          allowMultiple: false,
          products: [
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
            {
              image: 'assets/images/mini_type.png',
              label: 'Label',
              selected: false,
            },
          ],
        },
      ],
    },
  ];

  toggleSelection(
    type: any,
    product: any,
    isNested: boolean = false,
    index: number = 0
  ) {
    if (isNested) {
      product.products.forEach((prod: any) => (prod.selected = false));
      product.products[index].selected = true;
      return;
    }

    if (type.allowMultiple) {
      product.selected = !product.selected;
    } else {
      type.products.forEach((prod: any) => (prod.selected = false));
      product.selected = true;
    }
  }
}
