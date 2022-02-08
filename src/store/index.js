import {createStore} from 'vuex';
import sinay from './sinay';

export const store = createStore({
    debug : true,
    modules: {
        sinay,
    },
 })
