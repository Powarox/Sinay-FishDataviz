import axios from 'axios';
import localData from '../../local/data.json';

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
                    console.log('Impossible de charger les données depuis l\'API');
                    console.log('Chargement depuis un fichier local...');
                    data = localData.data;
                })
                .finally(() => commit('UPDATEDATA', data) );
        },
        createNewData({commit}, data){
            commit('ADDNEWDATA', data);
        }
    },
    mutations: {
        UPDATEDATA(state, data) {
            state.data = data;
        },
        ADDNEWDATA(state, data){
            state.data.push(data);
        },
    }
}
