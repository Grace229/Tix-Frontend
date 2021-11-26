const state = () => ({
    cart: [],

});
const getters = {
    // calculate total quantity in cart
    getCartQty(state) {
        if (state.cart.length < 1) {
            return 0
        } else {
            let totalQuantity = []
            state.cart.forEach((item) => {
                totalQuantity.push(item.quantity)
            })
            let total = totalQuantity.reduce((a, b) => {
                return a + b
            })
            return total
        }
    },

    // calculate total price
    getTotalPrice(state) {
        if (state.cart.length < 1) {
            return 0
        } else {
            let totalPrice = []
            state.cart.forEach((item) => {
                totalPrice.push(item.subTotal)
            })
            let totalP = totalPrice.reduce((a, b) => {
                return a + b
            })
            return totalP
        }
    }
};
const mutations = {
    setCart(state, item) {
        state.cart.unshift(item)
        localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set cart on reload
    setCartReload(state, item) {
        state.cart = item
    },
    // set cart after removing item
    setRemoveItemCart(state, item) {
        state.cart = item
        localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    // set saved product
    setSavedProducts(state, item) {
        state.savedProducts = item
    },
};
const actions = {};

export default {
    state,
    getters,
    mutations,
    actions
};