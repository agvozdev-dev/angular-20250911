import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {of} from 'rxjs';
import {Carousel} from '../../shared/carousel/carousel';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatTabNav, MatTabNavPanel} from '@angular/material/tabs';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
    selector: 'app-product',
    imports: [Carousel, MatIcon, MatIconButton, MatTabNav, MatTabNavPanel, MatProgressSpinner],
    templateUrl: './product.html',
    styleUrl: './product.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {
    private readonly productsStoreService = inject(ProductsStoreService);

    private readonly currentProductId$ = of('vytazka-polnovstraivaemaa-lex-gs-bloc-p-600-bezevyj');

    constructor() {
        this.currentProductId$.subscribe(id => {
            this.productsStoreService.loadProduct(id);
        });
    }

    getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }
}
