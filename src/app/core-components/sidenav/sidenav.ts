import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    effect,
    ElementRef,
    inject,
    Injector,
    input,
    model,
    output,
    signal,
    viewChild,
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
    protected readonly counter = signal(0);
    protected counterProp = 0;

    public readonly sidenavOpened = model(false);

    private readonly changeDetectorRef = inject(ChangeDetectorRef);
    // private readonly injector = inject(Injector);

    // private readonly drawerComponent = viewChild<MatDrawer>('drawer');
    private readonly drawerComponent = viewChild.required(MatDrawer);
    // Component.childViews.find(childView => childView.inject(MatDrawer)).inject(MatDrawer)
    private readonly drawerElement = viewChild.required(MatDrawer, {read: ElementRef});
    // Component.childViews.find(childView => childView.inject(MatDrawer)).inject(ElementRef)
    private readonly divElement = viewChild<ElementRef>('divElement');

    constructor() {
        // this.drawerElement();
        this.changeDetectorRef.detach();
        this.changeDetectorRef.reattach();

        setInterval(() => {
            this.counter.update(value => value + 1);

            // this.counterProp += 1;
            // this.changeDetectorRef.markForCheck();

            // this.changeDetectorRef.detectChanges();
        }, 1000);

        // setTimeout(() => {
        //     console.log('Start')
        //     effect(() => {
        //         console.log(this.counter());
        //     }, {injector: this.injector});
        //     console.log('End')
        // })

        // const counterEffect = effect((onCleanup) => {
        //     console.log(this.counter());

        //     const timerId = setTimeout(() => {
        //         console.log('Test interval 0.5');
        //     }, 500)

        //     // counterEffect.destroy();

        //     onCleanup(() => {
        //         clearTimeout(timerId);
        //     })
        // });

        // setTimeout(() => {
        //     counterEffect.destroy();
        // }, 5000)

        // this.listenCounter();
        this.listenOpenedInput();
    }

    private listenOpenedInput() {
        effect(() => {
            console.log(this.sidenavOpened());
        });
    }

    private listenCounter() {
        effect(() => {
            console.log(this.counter());
        });
    }

    toggleSidenav() {
        // this.sidenavOpened.set(!this.sidenavOpened());
        this.drawerComponent().toggle();
        console.log(this.divElement()?.nativeElement, this.drawerElement().nativeElement);
    }
}
