import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],

    (shop) => shop.collections
);


export const selectCollectionsForPreview = createSelector(
    [selectCollections],

    (collections) => {
        return collections? Object.keys(collections).map(key => collections[key]): []
    }
);

/*  selectCollection is not memoized due to collectionUrlParam being passed in 
    from our collection component running whenever our state changes and and 
    calling a new instance of our selectCollection function */

export const selectCollection = memoize((collectionUrlParam) => {
    return createSelector(
        [selectCollections],

        (collections) => collections? collections[collectionUrlParam]: null
    )
});

export const selectIsCollectionFetching = createSelector(
    [selectShop],

    (shop) => shop.isFetching 
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],

    (shop) => !!shop.collections 
);