import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Counter} from '../../../../shared/counter/counter';
import {FormsModule} from '@angular/forms';
import {MatAnchor} from '@angular/material/button';
import {JsonPipe} from '@angular/common';
import {IsStringValidator} from './validators/is-string.validator/is-string.validator';

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
        MatAnchor,
        JsonPipe,
        IsStringValidator,
    ],
})
export class FilterComponent {
    public readonly brands = input<string[] | null>(null);

    protected log(value: unknown) {
        console.log(value);
    }
}
