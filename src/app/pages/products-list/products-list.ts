import {Component} from '@angular/core';
import {Card} from './card/card';

@Component({
    selector: 'app-products-list',
    imports: [Card],
    templateUrl: './products-list.html',
    styleUrl: './products-list.css',
})
export class ProductsList {}
