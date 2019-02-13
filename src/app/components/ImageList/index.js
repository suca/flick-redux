import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import ImageItem from "../ImageItem";
import isString from 'lodash/isString';
import isEqual from 'lodash/isEqual';
import {
    StyleImageContainer,
    StyledImageListContainer,
    StyledNoItems,
    StyledLoading,
} from './ImageList.sc';
const propTypes = {
    tags: PropTypes.array,
    photosService: PropTypes.func.isRequired,
    photosData: PropTypes.array,
    isLoading: PropTypes.bool,
};

class ImageList extends React.PureComponent {
    componentDidMount () {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    componentDidUpdate (prevProps) {
        if (!isEqual(this.props.tags, prevProps.tags) && !isEmpty(this.props.tags)) {
            this.props.photosService(this.props.tags.toString());
        }
    }

    onScroll = () => {
        const offsetHeightScroll = 500;
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - offsetHeightScroll) &&
            this.props.photosData.length && !this.props.isLoading
        ) {
            this.props.photosService(this.props.tags.toString());
        }
    };

    sanitizingData (items) {
        if (!items) {
            return [];
        }

        return items.filter(item => {
            return isString(item.media.m) &&
                isString(item.title) &&
                isString(item.tags) &&
                isString(item.author) &&
                isString(item.date_taken)
        });

    }

    render () {
        let children = [];
        const items = this.sanitizingData(this.props.photosData);

        if (isEmpty(items) && this.props.isLoading) {
            for (let i=1; i<=20; i++) {
                const newItem = <ImageItem key={i} title={'...'} tags={'...'} owner={'...'} takenDate={'...'}/>;
                children = [...children, newItem];
            }

        } else if (isEmpty(items) && !this.props.isLoading) {
            children = (
                <StyledNoItems>No Items </StyledNoItems>
            );
        } else {
            children = items.map((image, k) => {

                return <ImageItem
                    key={k}
                    link={image.media.m}
                    title={image.title}
                    tags={image.tags}
                    owner={image.author}
                    takenDate={image.date_taken}
                    externalLink={image.link}
                />
            });
        }

        return  (
            <StyleImageContainer>
                <StyledImageListContainer>
                    {children}
                </StyledImageListContainer>
                <StyledLoading isLoading={this.props.isLoading} />
            </StyleImageContainer>
    );
    }
}

ImageList.propTypes = propTypes;
export default ImageList;
