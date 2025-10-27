import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {Card} from './card/card';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {FilterByPropertyPipe} from '../../shared/filter-by-property/filter-by-property-pipe';

@Component({
    selector: 'app-products-list',
    imports: [Card, MatProgressSpinner, ScrollWithLoadingDirective, FilterByPropertyPipe],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    private readonly productsStoreService = inject(ProductsStoreService);

    // For easy
    readonly name = signal('Мышь');

    // For hard
    readonly propertyName = 'feedbacksCount' as const; // keyof Product
    readonly searchPropertyValue = signal(5);

    products(): Product[] | null {
        return this.productsStoreService.getProducts();
    }

    constructor() {
        this.productsStoreService.loadProducts();
    }

    protected loadNextData() {
        console.log('Load next data');
    }
}
