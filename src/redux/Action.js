//add item
export const addCart = (product) =>{
    return{ 
        type : "ADD_TO_CART",
        payload : product,
    }
}

export const removeCart = (product) =>{
    return{ 
        type : "REMOVE_TO_CART",
        payload : product,
    }
}

export const deleteCart = (product) =>{
    return{ 
        type : "DELETE_TO_CART",
        payload : product,
    }
}