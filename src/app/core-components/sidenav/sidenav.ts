import {Component, input, output, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    imports: [MatDrawer, MatDrawerContainer, MatButton],
    templateUrl: './sidenav.html',
    styleUrl: './sidenav.css',
})
export class Sidenav {
    // protected readonly sidenavOpened = signal(false);

    public readonly sidenavOpened = input(false);

    public readonly sidenavOpenedChange = output<boolean>();

    toggleSidenav() {
        // this.sidenavOpened.update(opened => !opened);
        this.sidenavOpenedChange.emit(!this.sidenavOpened());
    }
}
