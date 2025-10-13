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

type ProductContext = {
    data: Product;
    allData: Product[];
    $implicit: Product;
};

@Component({
    selector: 'app-products-list',
    imports: [Card],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    readonly products = signal(productsMock);

    private readonly cardTemplate = viewChild.required<TemplateRef<ProductContext>>('cardTemplate');
    // private readonly cardViewContainer = viewChild.required('cardViewPort', {read: ViewContainerRef});
    private readonly cardViewContainer = viewChild.required('cardTemplate', {
        read: ViewContainerRef,
    });

    constructor() {
        this.insertCards();
    }

    private insertCards() {
        effect(() => {
            this.products().forEach(product => {
                this.cardViewContainer().createEmbeddedView(
                    this.cardTemplate(),
                    {data: product, allData: this.products(), $implicit: product},
                    // 'Test'
                );
            });
        });
    }
}
