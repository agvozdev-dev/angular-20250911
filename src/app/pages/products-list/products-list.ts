import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Card} from './card/card';
import {Product} from '../../shared/products/product.type';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {RouterLink} from '@angular/router';
import {FilterByPropertyPipe} from '../../shared/filter-by-property/filter-by-property-pipe';
import {FilterComponent} from './filter/reactive/filter';
// import {FilterComponent} from './filter/template-driven/filter';
import {BrandsService} from '../../shared/brands/brands.service';

@Component({
    selector: 'app-products-list',
    imports: [
        Card,
        MatProgressSpinner,
        ScrollWithLoadingDirective,
        RouterLink,
        FilterByPropertyPipe,
        FilterComponent,
    ],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly brandsService = inject(BrandsService);

    products(): Product[] | null {
        return this.productsStoreService.getProducts();
    }

    brands(): ReturnType<BrandsService['getBrands']> {
        return this.brandsService.getBrands();
    }

    constructor() {
        this.productsStoreService.loadProducts();
        this.brandsService.loadBrands();
    }

    protected loadNextData() {
        console.log('Load next data');
    }
}
