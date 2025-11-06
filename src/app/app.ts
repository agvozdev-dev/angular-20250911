import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Header} from './core-components/header/header';
import {Sidenav} from './core-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {InsetShadow} from './shared/inset-shadow/inset-shadow';
import {RouterOutlet} from '@angular/router';

export type ApplicationConfig = {
    title: string;
    imgUrl: string;
};

@Component({
    selector: 'app-root',
    imports: [Header, Sidenav, MatList, MatListItem, InsetShadow, RouterOutlet],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly rootApplicationConfig: ApplicationConfig = {
        title: 'angular-20250911',
        imgUrl: './favicon.ico',
    };
}
