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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
    readonly product = input.required<Product>();

    readonly buy = output<Product['_id']>();

    constructor() {
        console.log('CardComponent');
    }

    onProductBuy(event: Event) {
        event.stopPropagation();

        this.buy.emit(this.product()._id);
    }

    isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }
}
