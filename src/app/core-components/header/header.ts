import {Component, computed, input, InputSignal, output, signal} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {ApplicationConfig} from '../../app';

@Component({
    selector: 'app-header',
    imports: [MatToolbar, MatIcon, MatIconButton],
    templateUrl: './header.html',
    styleUrl: './header.css',
})
export class Header {
    // protected readonly title = 'angular-20250911';
    // protected readonly imgUrl = './favicon.ico';

    // public readonly title = input<string, ApplicationConfig>(
    //     undefined,
    //     {transform: (config: ApplicationConfig) => config.title}
    // );
    // public readonly title = input<string, ApplicationConfig>(
    //     '',
    //     {transform: (config: ApplicationConfig) => config.title}
    // );
    // public readonly applicationConfig = input<ApplicationConfig>();
    // public readonly applicationConfig = input<ApplicationConfig>({title: '', imgUrl: ''});
    public readonly applicationConfig = input.required<ApplicationConfig>();
    // public readonly applicationConfig = this.getInput();
    // public readonly applicationConfig = input.required<ApplicationConfig>({transform: (value: ApplicationConfig) => value.title});
    // public readonly applicationConfig = input.required<ApplicationConfig>({alias: 'config'});

    public readonly menuClick = output<Event>();

    // getInput(): InputSignal<ApplicationConfig> {
    //     return input.required<ApplicationConfig>();
    // }

    // private counter = signal(
    //     0,
    //     {
    //         equal: (a, b) => a === b
    //         // equal: (_a, _b) => false
    //         // equal: (_a, _b) => true
    //     },
    // );

    // private doubleCounter = computed(() => {
    //     console.log('Calculated doubleCounter');

    //     return this.counter() * 2;
    // });

    constructor() {
        // // const counterValue = this.counter();
        // console.log(this.counter());
        // this.counter.set(1);
        // console.log(this.counter());
        // this.counter.set(this.counter() + 1);
        // console.log(this.counter());
        // // this.counter.update((counter) => counter + 1);
        // this.counter.update((counter) => {
        //     return counter + 1;
        // });
        // console.log(this.counter());
        // ------------------------------------------------------------------------------------
        // setInterval(() => {
        //     // this.counter.update((counter) => counter + 1);
        //     console.log(this.doubleCounter());
        // }, 1000);
        // setTimeout(() => {
        //     this.counter.update((counter) => counter + 1);
        // }, 3000)
        // ------------------------------------------------------------------------------------
        // const showCount = signal(false);
        // const count = signal(0);
        // const conditionalCount = computed(() => {
        //     console.warn('Computed calculated');
        //     return showCount() ? `The count: ${count()}` : `Nothing`;
        // });
        // console.log(conditionalCount()); // Deps: showCount | calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Show count: true');
        // showCount.set(true);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log(conditionalCount()); // Deps: showCount, count | no calc
        // console.log(conditionalCount()); // Deps: showCount, count | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount, count | calc
        // console.log('Show count: true');
        // showCount.set(false);
        // console.log(conditionalCount()); // Deps: showCount | calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // console.log('Update count');
        // count.update(count => count + 1);
        // console.log(conditionalCount()); // Deps: showCount | no calc
        // ------------------------------------------------------------------------------------
    }

    onMenuClick(event: Event) {
        console.log('menu clicked, Header', event);

        this.menuClick.emit(event);
    }
}
