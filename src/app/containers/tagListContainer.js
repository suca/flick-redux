import { connect } from 'react-redux';
import TagList from '../components/TagList/index.js';
import { removeTag } from '../actions/tagListActions';
import { photosLocalService } from "../services/photosService";

const mapStateToProps = (state, props) => {
    return {
        tags: state.tagListState.tags,
        ...props,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeTag: (tag) => dispatch(removeTag(tag)),
        photosLocalService: () => {
            dispatch(photosLocalService());
        }
    };
};

const TagListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList);

export default TagListContainer;
