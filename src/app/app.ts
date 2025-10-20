import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Injectable,
    InjectionToken,
    Injector,
    signal,
} from '@angular/core';
import {Header} from './core-components/header/header';
import {ProductsList} from './pages/products-list/products-list';
import {Sidenav} from './core-components/sidenav/sidenav';
import {MatList, MatListItem} from '@angular/material/list';
import {InsetShadow} from './shared/inset-shadow/inset-shadow';

export type ApplicationConfig = {
    title: string;
    imgUrl: string;
};

@Component({
    selector: 'app-root',
    imports: [Header, ProductsList, Sidenav, MatList, MatListItem, InsetShadow],
    templateUrl: './app.html',
    styleUrl: './app.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly rootApplicationConfig: ApplicationConfig = {
        title: 'angular-20250911',
        imgUrl: './favicon.ico',
    };

    constructor() {
        // Bad
        // const token = 'Test';
        // const token = true;
        // const token = 123;

        // Normal
        // const token = {};
        // const token = {name: 'Test token'};

        // Best
        const token = new InjectionToken('Test token');
        const tokenFactory = new InjectionToken('Factory token');
        // @Injectable({providedIn: 'root'})
        class Token {
            public readonly userService = inject(User);
        }

        class User {
            constructor() {
                console.log('Create User instance');
            }
        }

        const parentInjector = Injector.create({
            providers: [User],
        });
        const injector = Injector.create({
            parent: parentInjector,
            providers: [
                // {
                //     provide: token, // token
                //     useValue: {name: 'Egor'},
                // },
                {
                    provide: token, // token
                    useClass: User,
                },
                // {
                //     provide: User, // token
                //     useClass: User,
                // },
                // {
                //     provide: Token,
                //     useExisting: token,
                // },
                Token,
                {
                    provide: tokenFactory,
                    // useFactory: () => ({name: 'Egor'}), // useValue
                    // useFactory: () => new User(), // useClass
                    useFactory: () => inject(token), // useExisting
                },
            ],
        });

        setTimeout(() => {
            // console.log(injector.get(token));
            // console.log(injector.get(Token));
            // console.log(injector.get(token) === injector.get(Token));
            // console.log(injector.get(token) === injector.get(tokenFactory));
            // console.log(injector.get(token));
            // console.log(injector.get(User));
            // console.log(injector.get(User));
            console.log(injector.get(Token));
            console.log(injector.get(Token).userService === injector.get(User));
        }, 5000);
    }
}
