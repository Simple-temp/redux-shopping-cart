import { combineReducers } from "redux"

const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADD_TO_CART":
            //if the product already exist
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                //increase the quantity 
                const increment = state.map((x) => x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x)
                return increment
            } else {
                //do not increase the quantity the default quantity is 1
                const product = action.payload
                return [...state, { ...product, quantity: 1 }]
            }
            break;

        case "REMOVE_TO_CART":
            // if the product already exist
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.quantity === 1) {
                // if the product quantity === 1 then delete the product
                const remove = state.filter((x) => x.id !== exist1.id)
                return remove
            } else {
                // decrease the quantity
                const decrement = state.map((x) => x.id === exist1.id ? { ...x, quantity: x.quantity - 1 } : x)
                return decrement
            }
            break;

        case "DELETE_TO_CART":

                return state.filter((x) => x.id !== product.id)

            break;


        default:
            return state
    }
}

const rootReducer = combineReducers({
    handleCart,
})

export default rootReducer;