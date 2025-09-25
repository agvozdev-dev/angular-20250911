import {Component} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductsList} from './pages/products-list/products-list';

@Component({
    selector: 'app-root',
    imports: [Header, ProductsList],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {}
