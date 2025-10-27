import {inject, Injectable, signal} from '@angular/core';
import {Product} from './product.type';
import {ProductsApiService} from './products-api.service';
import {Subscription} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductsStoreService {
    private readonly productsApiService = inject(ProductsApiService);

    private loadProductsSubscription: Subscription | null = null;
    private loadCurrentProductSubscription: Subscription | null = null;

    readonly productsStore = signal<Product[] | null>(null);
    readonly currentProductStore = signal<Product | null>(null);

    getProducts(): Product[] | null {
        return this.productsStore();
    }

    getProduct(): Product | null {
        return this.currentProductStore();
    }

    loadProducts() {
        if (this.loadProductsSubscription) {
            this.loadProductsSubscription.unsubscribe();
        }

        this.loadProductsSubscription = this.productsApiService
            .getProducts$()
            .subscribe(products => {
                this.productsStore.set(products);

                this.loadProductsSubscription = null;
            });
    }

    loadProduct(id: Product['_id']) {
        if (this.loadCurrentProductSubscription) {
            this.loadCurrentProductSubscription.unsubscribe();
        }

        const productPreview = this.productsStore()?.find(({_id}) => _id === id);

        this.currentProductStore.set(productPreview || null);

        this.loadCurrentProductSubscription = this.productsApiService
            .getProduct$(id)
            .subscribe(product => {
                this.currentProductStore.set(product || null);

                this.loadCurrentProductSubscription = null;
            });
    }
}
