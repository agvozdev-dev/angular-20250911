import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {filter, map} from 'rxjs';
import {Carousel} from '../../shared/carousel/carousel';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-product',
    imports: [
        Carousel,
        MatIcon,
        MatIconButton,
        MatTabsModule,
        MatProgressSpinner,
        RouterOutlet,
        RouterLink,
    ],
    templateUrl: './product.html',
    styleUrl: './product.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Product {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);

    private readonly currentProductId$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('productId')),
        filter(Boolean),
    );

    constructor() {
        this.currentProductId$.pipe(takeUntilDestroyed()).subscribe(id => {
            this.productsStoreService.loadProduct(id);
        });
    }

    getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }
}
