import {map, Observable} from 'rxjs';
import {Product} from './product.type';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

type ProductsDto = {
    data: {
        items: Product[];
    };
};

@Injectable({providedIn: 'root'})
export class ProductsApiService {
    private readonly httpClient = inject(HttpClient);

    getProducts$(): Observable<Product[]> {
        return this.httpClient
            .get<ProductsDto>(`/products/suggestion`)
            .pipe(map(productsDto => productsDto.data.items));
    }
}
