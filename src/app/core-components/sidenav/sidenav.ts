import {ChangeDetectionStrategy, Component, input, model, output, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    imports: [MatDrawer, MatDrawerContainer, MatButton],
    templateUrl: './sidenav.html',
    styleUrl: './sidenav.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidenav {
    protected readonly counter = signal(0);
    protected counterProp = 0;
    // public readonly sidenavOpened = input(false);

    // public readonly sidenavOpenedChange = output<boolean>();

    public readonly sidenavOpened = model(false);

    constructor() {
        setInterval(() => {
            this.counter.update(value => value + 1);
            // this.counterProp += 1;
        }, 1000);
    }

    toggleSidenav() {
        this.sidenavOpened.set(!this.sidenavOpened());
    }
}
