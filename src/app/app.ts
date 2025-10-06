import {Component, signal} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductsList} from './pages/products-list/products-list';
import {Sidenav} from './core-components/sidenav/sidenav';

export type ApplicationConfig = {
    title: string;
    imgUrl: string;
};

@Component({
    selector: 'app-root',
    imports: [Header, ProductsList, Sidenav],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App {
    // public propertyPublic = 1;
    // protected propertyProtected = 1;
    // private propertyPrivate = 1;

    // protected readonly title = 'angular-20250911';
    // protected readonly imgUrl = './favicon.ico';
    protected readonly rootApplicationConfig: ApplicationConfig = {
        title: 'angular-20250911',
        imgUrl: './favicon.ico',
    };

    protected readonly sidenavOpenedStore = signal(false);

    onMenuClick(event: Event) {
        console.log('onMenuClick App', event);
        this.sidenavOpenedStore.update(opened => !opened);
    }
}

// const app = new App();

// class ChildApp extends App {
//     public newProtected = this.propertyProtected
// }

// app.propertyProtected
