//add item
export const addCart = (product, quantity) =>{
    return{ 
        type : "ADD_TO_CART",
        payload : { ...product, quantity},
    }
}

export const removeCart = (product) =>{
    return{ 
        type : "REMOVE_TO_CART",
        payload : product,
    }
}
