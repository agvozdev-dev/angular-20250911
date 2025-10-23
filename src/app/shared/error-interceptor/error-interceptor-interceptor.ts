import {HttpInterceptorFn} from '@angular/common/http';
import {tap} from 'rxjs';

export const errorInterceptorInterceptor: HttpInterceptorFn = (request, next) => {
    return next(request).pipe(
        tap({
            error: error => {
                console.log(error);
            },
        }),
    );
};
