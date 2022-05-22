import { combineReducers } from "redux"

const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADD_TO_CART":
            //if the product already exist
            const exist = state.find((x) => x.id === product.id)
            localStorage.setItem("cartItem",JSON.stringify(exist))
            if (exist) {
                //increase the quantity 
                return state.map((x) => x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x)
            } else {
                //do not increase the quantity the default quantity is 1
                const product = action.payload
                return [...state, { ...product, quantity: 1 }]
            }
            break;
            
        case "REMOVE_TO_CART":
            // if the product already exist
            const exist1 = state.find((x) => x.id === product.id)
            if(exist1.quantity === 1 ){
                // if the product quantity === 1 then delete the product
                return state.filter((x) => x.id !== exist1.id)
            }else{
                // decrease the quantity
                return state.map((x) => x.id === exist1.id ? { ...x, quantity : x.quantity - 1 } : x )
            }
            break;

        default:
            return state
    }
}

const rootReducer = combineReducers({
    handleCart,
})

export default rootReducer;