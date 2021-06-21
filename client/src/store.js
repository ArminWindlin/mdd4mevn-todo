import {createStore} from 'vuex';
import {setAuthToken} from './httpService';

const store = createStore({
    state: {
        todoTrigger: 0,
        userTrigger: 0,
        snackbarText: '',
        userToken: '',
        user: null,
    },
    mutations: {
        todoChanged(state) {
            state.todoTrigger = state.todoTrigger + 1;
        },
        userChanged(state) {
            state.userTrigger = state.userTrigger + 1;
        },
        saveUserToken(state, userToken) {
            state.userToken = userToken;
            localStorage.setItem('userToken', userToken);
            setAuthToken(userToken);
        },
        saveUser(state, user) {
            state.user = user;
        },
        showSnackbar(state, text) {
            state.snackbarText = text;
            setTimeout(() => {
                store.commit('hideSnackbar');
            }, 3000);
        },
        hideSnackbar(state) {
            state.snackbarText = '';
        },
    },
});

export default store;
