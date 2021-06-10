import {combineComponents} from './utils';

import CartProvider from './cart/cart.provider';
import CollectionsProvider from './collections/collections.provider';
import CurrentUserProvider from './current-user/current-user.provider';
import DirectoryProvider from './directory/directory.provider';

const providers = [
    CartProvider,
    CollectionsProvider,
    CurrentUserProvider,
    DirectoryProvider
];

export const ContextProvider = combineComponents(...providers);