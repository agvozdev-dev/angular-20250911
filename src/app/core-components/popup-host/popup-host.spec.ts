import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PopupHost} from './popup-host';

describe('PopupHost', () => {
    let component: PopupHost;
    let fixture: ComponentFixture<PopupHost>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PopupHost],
        }).compileComponents();

        fixture = TestBed.createComponent(PopupHost);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
