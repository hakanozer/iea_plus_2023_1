export interface CardModel {
    id:              number;
    products:        Product[];
    total:           number;
    discountedTotal: number;
    userId:          number;
    totalProducts:   number;
    totalQuantity:   number;
}

export interface Product {
    id:                 number;
    title:              string;
    price:              number;
    quantity:           number;
    total:              number;
    discountPercentage: number;
    discountedPrice:    number;
}
