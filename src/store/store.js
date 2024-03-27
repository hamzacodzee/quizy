import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import credentials from './slice/CredentialSlice';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['credentials'],
};

const rootReducer = combineReducers({

    credentials: credentials,
});


const credentialsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: credentialsReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persist_store = persistStore(store);