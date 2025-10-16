import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductsList} from './pages/products-list/products-list';
import {Sidenav} from './core-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {PopupHost} from './core-components/popup-host/popup-host';

export type ApplicationConfig = {
    title: string;
    imgUrl: string;
};

@Component({
    selector: 'app-root',
    imports: [Header, ProductsList, Sidenav, MatList, MatListItem, PopupHost],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly rootApplicationConfig: ApplicationConfig = {
        title: 'angular-20250911',
        imgUrl: './favicon.ico',
    };

    readonly switchTemplate = signal(false);
    readonly closeTemplate = signal(true);

    constructor() {
        setInterval(() => {
            this.toggleTemplate();
        }, 3000);
    }

    private toggleTemplate() {
        this.switchTemplate.set(!this.switchTemplate());
        // or
        this.closeTemplate.set(!this.closeTemplate());
    }
}
