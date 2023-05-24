const initialState = JSON.parse(localStorage.getItem("basket")) || [];

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_CART': {
            localStorage.setItem(
                "basket",
                JSON.stringify([...state, action.payload])
            );

            return [...state, action.payload];
        }
        //   const existingProduct = state.find((item) => item.id === action.payload.id);
        //   if (existingProduct) {
        //     return state.map((item) =>
        //       item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        //     );
        //   } else {
        //     return [...state, { ...action.payload, quantity: 1 }];
        //   }

        case 'REMOVE_FROM_CART':
            localStorage.setItem(
                "basket",
                JSON.stringify([...state.filter((q) => q.id !== action.payload)])
            );
            return [...state.filter((q) => q.id !== action.payload)];
        // const updatedCart = [...state];
        // const index = updatedCart.findIndex((product) => product.id === action.payload);
        // if (index !== -1) {
        //     if (updatedCart[index].quantity > 1) {
        //         updatedCart[index].quantity--;
        //     } else {
        //         updatedCart.splice(index, 1);
        //     }
        // }
        // return updatedCart;

        default:
            return state;
    }
}
