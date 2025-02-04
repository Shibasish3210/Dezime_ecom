import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SelectSpaceComponent } from './components/select-space/select-space.component';
import { FormsModule } from '@angular/forms';
import { ProductsDisplayComponent } from './components/ui/products-display/products-display.component';
import { ProductVariationsComponent } from './components/ui/product-variations/product-variations.component';

@NgModule({
  declarations: [
    AppComponent,
    SimilarProductsComponent,
    ProductDetailsComponent,
    SelectSpaceComponent,
    ProductsDisplayComponent,
    ProductVariationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
