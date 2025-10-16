import {ChangeDetectionStrategy, Component, model, signal, viewChild} from '@angular/core';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    imports: [MatDrawer, MatDrawerContainer],
    templateUrl: './sidenav.html',
    styleUrl: './sidenav.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidenav {
    protected readonly counter = signal(0);

    public readonly sidenavOpened = model(false);

    private readonly drawerComponent = viewChild.required(MatDrawer);

    toggleSidenav(): void {
        this.drawerComponent().toggle();
    }
}
