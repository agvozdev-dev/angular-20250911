import {ProductImage} from './product-image.type';

export type Product = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    _id: string;
    name: string;
    price: number;
    images: ProductImage[];
    subCategory: string;
    feedbacksCount: number;
    rating: number;
};
