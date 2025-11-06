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
import {Counter} from '../../../../shared/counter/counter';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {startWith} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

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
    ],
})
export class FilterComponent {
    protected readonly brands = input<string[] | null>(null);

    protected readonly inputControl = new FormControl('123');
    protected readonly minCounterControl = new FormControl(123);

    protected readonly form = new FormGroup({
        search: new FormControl(''),
        brands: new FormArray<FormControl<boolean | null>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    protected readonly minCounterControlValue = toSignal(
        this.minCounterControl.valueChanges.pipe(startWith(this.minCounterControl.value)),
    );

    constructor() {
        this.form.get('priceRange')?.get('min')?.valueChanges.subscribe(console.log);
        this.form.get('priceRange')?.get('min')?.disable();
        console.log(this.form.get('priceRange')?.value);
        console.log(this.form.get('priceRange')?.getRawValue());
        // this.form.get('priceRange')?.get('min')?.enable();

        this.listenBrandsChange();

        // this.minCounterControl.valueChanges.pipe(startWith(this.minCounterControl.value)).subscribe(console.log);
        this.minCounterControl.valueChanges.subscribe(console.log);

        setTimeout(() => {
            this.minCounterControl.setValue(321);
        }, 3000);

        this.form.valueChanges.subscribe(console.log);
    }

    get hasBrandsControls(): boolean {
        return Boolean(this.brands());
    }

    private listenBrandsChange() {
        effect(() => {
            const brandsControls = this.brands()?.map(() => new FormControl(false)) || [];
            const brandsForm = new FormArray(brandsControls);

            this.form.setControl('brands', brandsForm);
        });
    }
}
