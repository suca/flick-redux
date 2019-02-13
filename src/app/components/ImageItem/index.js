import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledImageContainer,
    StyledPlaceholderImage,
    StyledRealImage,
    StyledDataFrame,
    StyledLink,
    StyledTitle,
    StyledTags,
    StyledOwner,
    StyledTakenDate,
} from './ImageItem.sc';

const propTypes = {
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    takenDate: PropTypes.string.isRequired,
    externalLink: PropTypes.string,
};

class ImageItem extends React.Component {
    constructor (props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = () => {
        window.open(this.props.externalLink, '_blank');
    };

    render () {
        const { link } = this.props;
        if (!link) {
            return (
                <StyledImageContainer>
                    <StyledPlaceholderImage />
                </StyledImageContainer>
            );
        }

        const takenDate = Date(this.props.takenDate);

        return (
            <StyledImageContainer>
                <StyledRealImage url={this.props.link} alt={this.props.title} onClick={this.onClickHandler}/>
                <StyledDataFrame>
                    <StyledLink>
                        <span>Link: </span>
                        <a href={this.props.externalLink} target={'_blank'}>{this.props.link}</a>
                    </StyledLink>
                    <StyledTitle>
                        <span>Title: </span> {this.props.title}
                    </StyledTitle>
                    <StyledTags>
                        <span>Tags: </span> {this.props.tags}
                    </StyledTags>
                    <StyledOwner>
                        <span>Owner: </span> {this.props.owner}
                    </StyledOwner>
                    <StyledTakenDate>
                        <span>Taken date: </span> {takenDate}
                    </StyledTakenDate>
                </StyledDataFrame>
            </StyledImageContainer>
        );
    };
}

ImageItem.propTypes = propTypes;
export default ImageItem;
