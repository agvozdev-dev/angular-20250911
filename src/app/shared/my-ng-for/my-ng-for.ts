import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';

type DataContext<Data> = {
    $implicit: Data;
    allData: Data[];
};

@Directive({
    selector: '[appMyNgFor]',
})
export class MyNgFor<Data> {
    public readonly appMyNgForOf = input.required<Data[] | null | undefined>();

    private readonly template = inject<TemplateRef<DataContext<Data>>>(TemplateRef);
    private readonly viewContainer = inject(ViewContainerRef);

    constructor() {
        this.insertTemplateByData();
    }

    private insertTemplateByData() {
        effect(() => {
            const items = this.appMyNgForOf();

            this.viewContainer.clear();

            items?.forEach(item => {
                this.viewContainer.createEmbeddedView(this.template, {
                    $implicit: item,
                    allData: items,
                });
            });
        });
    }
}
