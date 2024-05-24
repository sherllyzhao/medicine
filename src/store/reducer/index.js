import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage'

const config = {
    key: 'root',
    storage,
};

const userApp = persistCombineReducers(config, {
})

export default userApp
