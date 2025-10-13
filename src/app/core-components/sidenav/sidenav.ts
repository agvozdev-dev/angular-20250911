import {
    ChangeDetectionStrategy,
    Component,
    effect,
    input,
    model,
    signal,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
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
    // public readonly navigationTemplate = input.required<TemplateRef<unknown>>();

    protected readonly counter = signal(0);

    public readonly sidenavOpened = model(false);

    private readonly drawerComponent = viewChild.required(MatDrawer);

    // private readonly navigationViewPortContainer = viewChild.required('navigationViewPort', {read: ViewContainerRef});

    // constructor() {
    //     this.listenInsertNavigationTemplate();
    // }

    toggleSidenav(): void {
        this.drawerComponent().toggle();
    }

    // private listenInsertNavigationTemplate(): void {
    //     // setTimeout(() => {
    //     //     this.navigationViewPortContainer().createEmbeddedView(this.navigationTemplate());
    //     //     this.navigationViewPortContainer().createEmbeddedView(this.navigationTemplate());
    //     //     this.navigationViewPortContainer().createEmbeddedView(this.navigationTemplate());
    //     // }, 1000);
    //     // setTimeout(() => {
    //     //     console.log(this.navigationViewPortContainer().length);

    //     //     this.navigationViewPortContainer().clear();

    //     //     console.log(this.navigationViewPortContainer().length);
    //     // }, 2000);
    //     effect(() => {
    //         this.navigationViewPortContainer().clear();
    //         this.navigationViewPortContainer().createEmbeddedView(this.navigationTemplate());
    //     })
    // }
}
