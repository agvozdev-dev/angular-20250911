import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-products-list',
    imports: [Card, MatProgressSpinner],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    readonly products = signal<Product[] | null>(null);

    constructor() {
        this.loadProducts();
    }

    private loadProducts() {
        setTimeout(() => {
            this.products.set(productsMock);
        }, 3000);
    }
}
