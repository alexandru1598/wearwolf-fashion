const initialState = {
    products: []
}

export function favoritesReducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD_TO_FAVORITES':
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload.product
                ]
            }
        case 'REMOVE_FROM_FAVORITES':
            const filteredProducts = state.products.filter((product) => {
                return product.id !== action.payload.id;
            });
            return {
                ...state,
                products: filteredProducts
            };
        default:
            return state;
        
    }
}