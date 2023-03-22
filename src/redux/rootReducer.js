import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contacts-slice';
import authReducer from './auth/auth-slice';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistedAuthReducer,
});

export default rootReducer;
