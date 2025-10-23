import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {baseUrl} from './baser-url.const';

export const baseUrlInterceptor: HttpInterceptorFn = (
    request: HttpRequest<unknown>,
    next: HttpHandlerFn,
) => {
    const newRequest = request.clone({
        url: `${baseUrl}${request.url}`,
    });

    return next(newRequest);
};
