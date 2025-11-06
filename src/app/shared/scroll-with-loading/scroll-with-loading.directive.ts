import {Directive, ElementRef, inject, output} from '@angular/core';
import {isScrollReachedBottomOffcet} from './utils/is-scroll-reached-bottom-offcet';

@Directive({
    selector: '[appScrollWithLoading]',
    standalone: true,
    host: {
        '(scroll)': 'onScroll()',
    },
    exportAs: 'appScrollWithLoading',
})
export class ScrollWithLoadingDirective {
    private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

    private prevScrollTop = -1;

    readonly loadNextData = output<void>();

    onScroll() {
        const {scrollTop, clientHeight, scrollHeight} = this.element;
        const prevScrollTop = this.prevScrollTop;

        this.prevScrollTop = scrollTop;

        const lowerScrollPosition = scrollHeight - clientHeight;
        const shouldLoadMessagesDown = isScrollReachedBottomOffcet(
            scrollTop,
            lowerScrollPosition,
            prevScrollTop,
        );

        if (shouldLoadMessagesDown) {
            this.loadNextData.emit();
        }
    }
}
