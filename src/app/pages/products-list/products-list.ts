import {
    ChangeDetectionStrategy,
    Component,
    effect,
    signal,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.type';
import {MyNgFor} from '../../shared/my-ng-for/my-ng-for';
import {NgFor, NgIf} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-products-list',
    imports: [Card, MyNgFor, NgFor, NgIf, MatProgressSpinner],
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
        // setTimeout(() => {
        //     this.products.set(productsMock);
        // }, 2000)
        setTimeout(() => {
            this.products.set([]);
        }, 2000);
        // setTimeout(() => {
        //     this.products.set([...productsMock].reverse());
        // }, 4000)
        // setTimeout(() => {
        //     this.products.set(productsMock.map(item => ({...item, price: 999999})));
        // }, 4000)
        setTimeout(() => {
            this.products.set(productsMock);
        }, 4000);
    }

    customTrackBy(index: number, item: Product) {
        // return item;
        return item._id;
        // return item.name + item.price;
    }
}
