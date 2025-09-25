import {Component} from '@angular/core';
import {productsMock} from '../../../shared/products/products.mock';
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
    ],
    templateUrl: './card.html',
    styleUrl: './card.css',
})
export class Card {
    readonly product = productsMock[0];

    onProductBuy(event: Event) {
        event.stopPropagation();

        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        return this.product.rating >= starIndex;
    }
}
