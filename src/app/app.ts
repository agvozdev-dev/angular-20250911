import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductsList} from './pages/products-list/products-list';
import {Sidenav} from './core-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';

export type ApplicationConfig = {
    title: string;
    imgUrl: string;
};

@Component({
    selector: 'app-root',
    imports: [Header, ProductsList, Sidenav, MatList, MatListItem],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly rootApplicationConfig: ApplicationConfig = {
        title: 'angular-20250911',
        imgUrl: './favicon.ico',
    };

    protected readonly needProdTemplate = signal(false);

    constructor() {
        setInterval(() => {
            this.needProdTemplate.update(value => !value);
        }, 1000);
    }
}
