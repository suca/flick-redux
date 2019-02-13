import { connect } from 'react-redux';
import SearchInput from '../components/SearchInput/index.js';
import { addTag } from '../actions/tagListActions';

const mapStateToProps = (state) => {
    return {
        tags: state.tagListState.tags,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTag: (tag) => dispatch(addTag(tag)),
    };
};

const SearchInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput);

export default SearchInputContainer;
