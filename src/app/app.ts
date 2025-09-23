import {Component, signal} from '@angular/core';
import {Header} from './core-components/header/header';

@Component({
    selector: 'app-root',
    // selector: 'div#root',
    imports: [Header],
    templateUrl: './app.html',
    // template: `
    // <h1>Nihao!</h1>
    // `,
    styleUrl: './app.css',
})
export class App {
    protected readonly title = signal('angular-20250911');
}
