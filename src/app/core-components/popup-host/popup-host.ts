import {NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, input, TemplateRef} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    imports: [NgTemplateOutlet],
    templateUrl: './popup-host.html',
    styleUrl: './popup-host.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHost {
    readonly template = input<TemplateRef<unknown> | null>(null);
}
