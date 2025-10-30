import {Routes} from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        loadComponent: () =>
            import('./pages/products-list/products-list').then(m => m.ProductsList),
    },
    {
        path: 'product/:productId',
        loadChildren: () => import('./pages/product/product.routes').then(m => m.routes),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    },
];
