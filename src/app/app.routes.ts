import {Routes} from '@angular/router';
import {ProductsList} from './pages/products-list/products-list';
import {Product} from './pages/product/product';
import {NotFound} from './pages/not-found/not-found';
import {Type} from './pages/product/type/type';
import {Description} from './pages/product/description/description';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        component: ProductsList,
    },
    {
        path: 'product/:productId',
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
    {
        path: '**',
        component: NotFound,
    },
];
