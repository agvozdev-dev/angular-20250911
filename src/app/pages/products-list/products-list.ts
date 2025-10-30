import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {Card} from './card/card';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {FilterByPropertyPipe} from '../../shared/filter-by-property/filter-by-property-pipe';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
    selector: 'app-products-list',
    imports: [
        Card,
        MatProgressSpinner,
        ScrollWithLoadingDirective,
        RouterOutlet,
        RouterLink,
        FilterByPropertyPipe,
    ],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    private readonly productsStoreService = inject(ProductsStoreService);

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
