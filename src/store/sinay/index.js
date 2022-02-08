import axios from "axios";

export default {
    state() {
        return {
            data: {},
        }
    },
    getters: {
        getData(state) {
            return state.data;
        },
    },
    actions: {
        fetchDataFromSinayApi({commit}) {
            let data = {}
            axios
                .get('https://services-fish-price-dev.sinay.ai/seafoods')
                .then(response => {
                    data = response.data.data;
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => commit('UPDATEDATA', data) );
        },
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
        },
    }
}
