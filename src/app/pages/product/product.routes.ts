import {Routes} from '@angular/router';
import {Product} from './product';
import {Description} from './description/description';
import {Type} from './type/type';

export const routes: Routes = [
    {
        path: '',
        component: Product,
        // canActivate: [canActivateTestGuard],
        // canActivateChild: [canActivateChildTestGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'description',
            },
            {
                path: 'type',
                component: Type,
                // canActivate: [canActivateTestGuard],
            },
            {
                path: 'description',
                component: Description,
                // canActivate: [canActivateTestGuard],
            },
        ],
    },
];
