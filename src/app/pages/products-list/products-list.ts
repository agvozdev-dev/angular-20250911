import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    imports: [Card, MatProgressSpinner, ScrollWithLoadingDirective],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    private readonly productsStoreService = inject(ProductsStoreService);

    // readonly products = signal<Product[] | null>(null);

    products(): Product[] | null {
        return this.productsStoreService.getProducts();
    }

    constructor() {
        this.productsStoreService.loadProducts();
    }

    protected loadNextData() {
        console.log('Load next data');
    }

    // private loadProducts() {
    //     setTimeout(() => {
    //         this.products.set(productsMock);
    //     }, 3000);
    // }
}
