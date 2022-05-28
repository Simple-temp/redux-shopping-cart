import { combineReducers } from "redux"

const cart = {
    cart: {
        cartItem: localStorage.getItem("cartItem")
            ? JSON.parse(localStorage.getItem("cartItem"))
            : [],
    }
}

const handleCart = (state = cart, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const newItem = action.payload
            const existItem = state.cart.cartItem.find(item => item.id === newItem.id)
            const cartItem = existItem
                ? state.cart.cartItem.map(item => item.id === existItem.id ? newItem : item)
                : [...state.cart.cartItem, newItem]
            localStorage.setItem("cartItem", JSON.stringify(cartItem))
            return { ...state, cart: { ...state.cart, cartItem } }

        case "REMOVE_TO_CART":
            {
                const cartItem = state.cart.cartItem.filter(item => item.id !== action.payload.id)
                localStorage.setItem("cartItem", JSON.stringify(cartItem))
                return { ...state, cart: { ...state.cart, cartItem } }
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    handleCart,
})

export default rootReducer;