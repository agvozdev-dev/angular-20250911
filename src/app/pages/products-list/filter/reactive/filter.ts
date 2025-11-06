import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    effect,
    inject,
    input,
} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Counter} from '../../../../shared/counter/counter';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatInput, MatFormField, MatLabel, MatCheckbox, MatProgressSpinner, Counter],
})
export class FilterComponent {
    brands = input<string[] | null>(null);

    get hasBrandsControls(): boolean {
        return Boolean(this.brands());
    }
}
