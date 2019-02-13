import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import {
    StyledTag,
    StyledLabelTag,
    StyledTagList,
    StyledIconClose,
} from './TagList.sc';

const propTypes = {
    tags: PropTypes.array.isRequired,
    removeTag: PropTypes.func,
    photosLocalService: PropTypes.func,
};

class TagList extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onClickHandler (event) {
        const item = event.target.dataset.tag;

        if (item) {
            this.props.removeTag(item);
            this.props.photosLocalService();
        }
    };

    render () {
        const items = this.props.tags.map(tag => {
            return (
                <StyledTag key={tag}>
                    <StyledLabelTag>{tag}</StyledLabelTag>
                    <StyledIconClose data-tag={tag} onClick={this.onClickHandler}>X</StyledIconClose>
                </StyledTag>
            );
        });

        return <StyledTagList>{ items }</StyledTagList>;
    }
}

TagList.propTypes = propTypes;
export default connect()(TagList)
