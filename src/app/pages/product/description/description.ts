import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-description',
    imports: [],
    templateUrl: './description.html',
    styleUrl: './description.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Description {}
