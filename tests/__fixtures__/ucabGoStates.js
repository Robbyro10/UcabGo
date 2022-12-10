
export const products = [
    {
        id: '1',
        name: 'Super Burger',
        desc: 'Delicious and big',
        img: 'http://res.clouisdfojoidf',
        active: true,
    },
    {
        id: '2',
        name: 'Hot Dog',
        desc: 'With 3 sauces',
        img: 'http://res.clo234uisdferr2df',
        active: true,
    },
];

export const initialState = {
    isLoadingProducts: true,
    isLoadingStores: true,
    isLoadingOrders: true,
    isLoadingClients: true,
    products: [],
    stores: [],
    orders: [],
    clients: [],
    activeProduct: null,
}

export const appWithProductsState = {
    isLoadingProducts: false,
    isLoadingStores: true,
    isLoadingOrders: true,
    isLoadingClients: true,
    products: [...products],
    stores: [],
    orders: [],
    clients: [],
    activeProduct: null,
}

export const appWithActiveProductState = {
    isLoadingProducts: false,
    isLoadingStores: true,
    isLoadingOrders: true,
    isLoadingClients: true,
    products: [...products],
    stores: [],
    orders: [],
    clients: [],
    activeProduct: {...products[0]},
}

