import {useSelector} from 'react-redux';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const CollectionPageContainer = () => {

    const isCollectionLoaded = useSelector(selectIsCollectionsLoaded);

    return <CollectionPageWithSpinner isLoading={!isCollectionLoaded} />;
};

export default CollectionPageContainer;