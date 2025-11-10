import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {IsStringValidator} from './is-string.validator';
import {Component, input, signal} from '@angular/core';
import {combineLatest} from 'rxjs';
import {
    ComponentFixture,
    fakeAsync,
    flush,
    flushMicrotasks,
    TestBed,
    tick,
} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

describe('IsStringValidator isolate', () => {
    let directive: IsStringValidator;

    beforeEach(() => {
        directive = new IsStringValidator();
    });

    it('String no error', () => {
        const error = directive.validate(new FormControl('String'));

        expect(error).toEqual(null);
    });

    it('Number error', () => {
        const error = directive.validate(new FormControl('123'));

        expect(error).toEqual({isStringValidator: 'Is string validator error'});
    });
});

@Component({
    template: `
        <input appIsStringValidator [(ngModel)]="search" />
    `,
    imports: [FormsModule, IsStringValidator],
})
class TestComponent {
    search = signal('123');
    // search = input('123');
}

describe('IsStringValidator integration', () => {
    let fixture: ComponentFixture<TestComponent>;
    // let component: TestComponent;
    let inputNgModel: NgModel;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        // component = fixture.componentInstance;
        inputNgModel = fixture.debugElement.query(By.css('input')).injector.get(NgModel);

        // fixture.componentInstance.search.set('321');
        // fixture.componentRef.setInput('search', '321');
    });

    // it('Number error', async () => {
    //     fixture.detectChanges();

    //     await fixture.whenStable();

    //     const errors = inputNgModel.errors;

    //     expect(errors).toEqual({isStringValidator: 'Is string validator error'});
    // });

    it('Number error', fakeAsync(() => {
        fixture.detectChanges();

        // tick(100);
        // flush();
        flushMicrotasks();

        const errors = inputNgModel.errors;

        expect(errors).toEqual({isStringValidator: 'Is string validator error'});
    }));
});
