import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Header} from './header';
import {By} from '@angular/platform-browser';

describe('Header', () => {
    let fixture: ComponentFixture<Header>;
    let component: Header;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Header],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(Header);
        component = fixture.componentInstance;

        fixture.componentRef.setInput('applicationConfig', {
            title: 'angular-20250911',
            imgUrl: './favicon.ico',
        });

        fixture.detectChanges();
    });

    // it('Отправка события menuClick', () => {
    //     const trigerEvent = new Event('click');
    //     const menuButtonDebugElement = fixture.debugElement.query(
    //         By.css('[test-id="header-menu-button"]')
    //     );

    //     const menuClickEmitSpy = spyOn(component.menuClick, 'emit');

    //     expect(menuClickEmitSpy).not.toHaveBeenCalled();

    //     menuButtonDebugElement.triggerEventHandler('click', trigerEvent);

    //     expect(menuClickEmitSpy).toHaveBeenCalled();
    // });

    it('Отправка события menuClick', () => {
        const trigerEvent = new Event('click');
        const menuButtonDebugElement = fixture.debugElement.query(
            By.css('[test-id="header-menu-button"]'),
        );

        const subscription = component.menuClick.subscribe(event => {
            console.log('----------------Subscribe----------------');
            // expect(event).toEqual(new Event(''));

            // expect(event).toBe(new Event(''));
            expect(event).toBe(trigerEvent);

            subscription.unsubscribe();
        });

        console.log('----------------triggerEventHandler----------------');
        menuButtonDebugElement.triggerEventHandler('click', trigerEvent);
        console.log('----------------triggerEventHandler END----------------');
    });
});
