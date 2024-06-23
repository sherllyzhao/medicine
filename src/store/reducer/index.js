import {persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage'
import user from './user';

const config = {
    key: 'root',
    storage,
};

const userApp = persistCombineReducers(config, {
    user
})

export default userApp
