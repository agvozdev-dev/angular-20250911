import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-type',
    imports: [RouterLink],
    templateUrl: './type.html',
    styleUrl: './type.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Type {}
