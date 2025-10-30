import {Routes} from '@angular/router';
import {ProductsList} from './pages/products-list/products-list';
import {Product} from './pages/product/product';
import {NotFound} from './pages/not-found/not-found';
import {Type} from './pages/product/type/type';
import {Description} from './pages/product/description/description';

// 'product/id'

export const routes: Routes = [
    {
        path: '',
        // component: ProductsList,
        redirectTo: '/products-list',
        // pathMatch: 'prefix',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        component: ProductsList,
    },
    {
        path: 'product/:productId', // '...'.split('/')
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
    // {
    //     path: 'product', // /product/id
    //     redirectTo: 'куда-то',
    //     pathMatch: 'prefix',
    // },
];

// 'http://localhost:4200/products-list' -> '/products-list' -> ['products-list']
// 'http://localhost:4200/product/id' -> '/product/id' -> ['product', 'id']
