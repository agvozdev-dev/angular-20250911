import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatIconButton} from '@angular/material/button';
import {Product} from '../../../shared/products/product.type';
import {Carousel} from '../../../shared/carousel/carousel';
import {MyCurrencyPipe} from '../../../shared/my-currency/my-currency-pipe';
import {CurrencyPipe, JsonPipe} from '@angular/common';

@Component({
    selector: 'app-card',
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatIcon,
        MatCardActions,
        MatCardContent,
        MatIconButton,
        MatButton,
        Carousel,
        MyCurrencyPipe,
        CurrencyPipe,
        JsonPipe,
    ],
    templateUrl: './card.html',
    styleUrl: './card.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
    readonly product = input.required<Product>();

    readonly buy = output<Product['_id']>();

    onProductBuy(event: Event) {
        event.stopPropagation();

        this.buy.emit(this.product()._id);
    }

    isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }

    // getPrice(): string {
    //     return `${this.product().price} $`
    // }

    readonly getPrice = getPrice;
}

// function getPrice(product: Product): string {
//     return `${product.price} $`
// }
function getPrice(price: number, code = '$'): string {
    console.log('getPrice Component');
    return `${price} ${code}`;
}
