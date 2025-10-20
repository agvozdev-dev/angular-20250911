import {Directive, ElementRef, inject, signal} from '@angular/core';

@Directive({
    selector: '[appInsetShadow]',
    host: {
        '[style.boxShadow]': 'shadow()',
        '(click)': 'onClick($event)',
    },
})
export class InsetShadow {
    protected readonly shadow = signal('');

    protected onClick(_event: Event) {
        this.shadow.update(currentShadow => (currentShadow ? '' : 'inset 0 0 10px #000'));
    }
}
