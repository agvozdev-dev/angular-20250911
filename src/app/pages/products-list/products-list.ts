import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Card} from './card/card';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    imports: [Card],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsList {
    readonly products = signal(productsMock);
}
