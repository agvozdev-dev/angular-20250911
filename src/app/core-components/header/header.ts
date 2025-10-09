import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    input,
    InputSignal,
    output,
    signal,
} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatToolbar} from '@angular/material/toolbar';
import {ApplicationConfig} from '../../app';

@Component({
    selector: 'app-header',
    imports: [MatToolbar, MatIcon, MatIconButton],
    templateUrl: './header.html',
    styleUrl: './header.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
    public readonly applicationConfig = input.required<ApplicationConfig>();

    public readonly menuClick = output<Event>();

    constructor() {
        effect(() => {
            console.log(this.applicationConfig());
        });
    }

    onMenuClick(event: Event) {
        this.menuClick.emit(event);
    }
}
