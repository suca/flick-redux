import { connect } from 'react-redux';
import { photosService } from '../services/photosService';
import ImageList from '../components/ImageList/index';

const mapStateToProps = (state, props) => {
    return {
        isLoading: state.photosState.isLoading,
        photosData: state.photosState.photosData,
        tags: state.tagListState.tags,
        ...props,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        photosService: tag => {
            dispatch(photosService(tag));
        }
    };
};

const ImageListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageList);

export default ImageListContainer;
