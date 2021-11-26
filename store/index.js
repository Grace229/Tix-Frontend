const state = () => ({
    products: []
});
const getters = {
    GetProducts: state => {
        return state.products
    },
};
const mutations = {
    setProduct: (state, products) => (state.products = products)
};
const actions = {
    setProduct: ({ commit }, products) => commit("setProducts", products)
};

export default {
    state,
    getters,
    mutations,
    actions
};