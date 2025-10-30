import {Routes} from '@angular/router';
import {NotFound} from './pages/not-found/not-found';
import {canDeactivateTestGuard} from './shared/test-guards/can-deactivate-test.guard';
import {canMatchTestGuard} from './shared/test-guards/can-match-test.guard';

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
        // canDeactivate: [canDeactivateTestGuard],
        // canMatch: [canMatchTestGuard],
    },
    // {
    //     path: 'products-list',
    //     loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    // },
    {
        path: 'product/:productId',
        // canActivate: [canActivateTestGuard],
        loadChildren: () => import('./pages/product/product.routes').then(m => m.routes),
        // children: routes, // Frop product directory
        // children: [
        //     {
        //         path: '',
        //         component: Product,
        //         children: [
        //             {
        //                 path: '',
        //                 pathMatch: 'full',
        //                 redirectTo: 'description',
        //             },
        //             {
        //                 path: 'type',
        //                 component: Type,
        //             },
        //             {
        //                 path: 'description',
        //                 component: Description,
        //             },
        //         ],
        //     }
        // ]
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
    },
];
