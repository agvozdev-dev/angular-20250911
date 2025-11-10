import {HttpClient, provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {ProductsApiService} from './products-api.service';
import {productsMock} from './products.mock';
import {Product} from './product.type';
import {EMPTY, map, Observable, of, timer} from 'rxjs';

const httpClientMock: HttpClient = {
    get(_url: string, _options: unknown): Observable<unknown> {
        return EMPTY;
    },
} as unknown as HttpClient;

describe('ProductsApiService', () => {
    let service: ProductsApiService;
    // let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // providers: [provideHttpClient(), provideHttpClientTesting()],
            providers: [
                {
                    provide: HttpClient,
                    useValue: httpClientMock,
                },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsApiService);
        // httpTestingController = TestBed.inject(HttpTestingController);
    });

    // it('HttpClientMock test', () => {
    //     service.getProducts$().subscribe(products => {
    //         // expect(products).toBe(null as any as Product[]);
    //         expect(products).toBe(productsMock);
    //     });

    //     httpTestingController.expectOne('/products/suggestion').flush({data: {items: productsMock}})
    // })

    // it('DI my mock test', (done) => {
    //     // spyOn(httpClientMock, 'get').and.returnValue(
    //     //     of({data: {items: productsMock}})
    //     // );
    //     spyOn(httpClientMock, 'get').and.returnValue(
    //         timer(1000).pipe(map(() => ({data: {items: productsMock}})))
    //     );

    //     service.getProducts$().subscribe(products => {
    //         // expect(products).toBe(null as any as Product[]);
    //         expect(products).toBe(productsMock);

    //         done();
    //     });
    // });

    it('DI my mock test', fakeAsync(() => {
        // spyOn(httpClientMock, 'get').and.returnValue(
        //     of({data: {items: productsMock}})
        // );
        spyOn(httpClientMock, 'get').and.returnValue(
            timer(1000).pipe(map(() => ({data: {items: productsMock}}))),
        );

        service.getProducts$().subscribe(products => {
            // expect(products).toBe(null as any as Product[]);
            expect(products).toBe(productsMock);
        });

        tick(1500);
    }));
});
