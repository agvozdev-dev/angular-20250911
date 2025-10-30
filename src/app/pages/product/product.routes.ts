import {Routes} from '@angular/router';
import {Product} from './product';
import {Description} from './description/description';
import {Type} from './type/type';

export const routes: Routes = [
    {
        path: '',
        component: Product,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'description',
            },
            {
                path: 'type',
                component: Type,
            },
            {
                path: 'description',
                component: Description,
            },
        ],
    },
];
