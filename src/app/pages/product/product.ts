import {ChangeDetectionStrategy, Component, DestroyRef, inject} from '@angular/core';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {filter, map, of} from 'rxjs';
import {Carousel} from '../../shared/carousel/carousel';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatTabNav, MatTabNavPanel, MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatTabNavBarHarness} from '@angular/material/tabs/testing';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
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
    // private readonly router = inject(Router);
    // private readonly destroyRef = inject(DestroyRef);

    // private readonly currentProductId$ = of('6-elektronnaa-kniga-digma-e656-seryj--cehol');
    private readonly currentProductId$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('productId')),
        filter(Boolean),
    );

    constructor() {
        this.currentProductId$.pipe(takeUntilDestroyed()).subscribe(id => {
            this.productsStoreService.loadProduct(id);
        });

        // setTimeout(() => {
        //     this.currentProductId$
        //         .pipe(takeUntilDestroyed(this.destroyRef))
        //         .subscribe(id => {
        //             this.productsStoreService.loadProduct(id);
        //         });
        // })

        // const productId = this.activatedRoute.snapshot.paramMap.get('productId');

        // if (productId) {
        //     this.productsStoreService.loadProduct(productId);
        // }

        // setTimeout(() => {
        //     this.router.navigateByUrl(`/product/50-127-sm-televizor-led-harper-50u750ts-cernyj/description`);
        // }, 5000);
    }

    getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }

    // navigateTo(childSegment: string) {
    //     // const urlTree = this.router.createUrlTree(['./', childSegment], {relativeTo: this.activatedRoute});

    //     // console.log(urlTree, urlTree.toString());

    //     // this.router.navigateByUrl(`./${childSegment}`);
    //     // this.router.navigateByUrl(urlTree.toString());
    //     // this.router.navigateByUrl(urlTree);

    //     this.router.navigate(['./', childSegment], {relativeTo: this.activatedRoute});
    // }
}
