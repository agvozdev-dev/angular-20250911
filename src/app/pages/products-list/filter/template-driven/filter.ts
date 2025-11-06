import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Counter} from '../../../../shared/counter/counter';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatAnchor} from '@angular/material/button';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        MatInput,
        MatFormField,
        MatLabel,
        MatCheckbox,
        MatProgressSpinner,
        Counter,
        FormsModule,
        JsonPipe,
        MatAnchor,
    ],
})
export class FilterComponent {
    public readonly brands = input<string[] | null>(null);

    protected readonly minStorage = signal(123);

    protected log(value: unknown) {
        console.log(value);
    }
}
