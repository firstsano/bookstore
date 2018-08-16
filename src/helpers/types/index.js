import { shape, number, string } from 'prop-types';

export const productType = shape({
    id: number.isRequired,
    title: string.isRequired,
    mainImage: shape({
        id: string.isRequired,
        url: string.isRequired
    }).isRequired,
    price: number.isRequired,
});

export const cartItemType = shape({
    id: number.isRequired,
    title: string.isRequired,
    mainImage: shape({
        id: string.isRequired,
        url: string.isRequired
    }).isRequired,
    price: number.isRequired,
    quantity: number.isRequired,
    totalPrice: number.isRequired
});

