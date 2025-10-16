import {
    ChangeDetectionStrategy,
    Component,
    effect,
    input,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    imports: [],
    templateUrl: './popup-host.html',
    styleUrl: './popup-host.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHost {
    private readonly viewportViewContainer = viewChild.required('viewport', {
        read: ViewContainerRef,
    });

    readonly template = input<TemplateRef<unknown> | null>(null);

    constructor() {
        this.listenUpdatePopupContent();
    }

    private listenUpdatePopupContent() {
        effect(() => {
            const template = this.template();

            this.viewportViewContainer().clear();

            if (template) {
                this.viewportViewContainer().createEmbeddedView(template);
            }
        });
    }
}
