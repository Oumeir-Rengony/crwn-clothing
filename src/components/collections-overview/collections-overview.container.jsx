import {useSelector} from 'react-redux';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionsOverviewContainer = () => {

    const isCollectionFetched = useSelector(selectIsCollectionFetching);

    return <CollectionOverviewWithSpinner isLoading={isCollectionFetched} />;
};

export default CollectionsOverviewContainer;