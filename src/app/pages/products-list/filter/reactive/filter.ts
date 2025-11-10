import {ChangeDetectionStrategy, Component, effect, input} from '@angular/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {Counter} from '../../../../shared/counter/counter';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {isStringValidator} from './validators/is-string.validator';
import {JsonPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {EMPTY, map} from 'rxjs';

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
        ReactiveFormsModule,
        JsonPipe,
    ],
})
export class FilterComponent {
    public readonly brands = input<string[] | null>(null);

    protected readonly form = new FormGroup({
        search: new FormControl('', {
            validators: [isStringValidator, Validators.required, Validators.minLength(3)],
            asyncValidators: [],
        }),
        brands: new FormArray<FormControl<boolean | null>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    readonly errors = toSignal(
        this.form.get('search')?.statusChanges.pipe(map(() => this.form.get('search')?.errors)) ||
            EMPTY,
    );

    constructor() {
        this.form.get('search')?.errors;
        this.form.get('search')?.getError('isStringValidator');

        // setTimeout(() => {
        //     this.form.get('search')?.setValue('321');
        // }, 3000);

        this.form.get('search')?.statusChanges.subscribe(console.log);

        this.listenBrandsChange();
    }

    private listenBrandsChange() {
        effect(() => {
            const brandsControls = this.brands()?.map(() => new FormControl(false)) || [];
            const brandsForm = new FormArray(brandsControls);

            this.form.setControl('brands', brandsForm);
        });
    }
}
