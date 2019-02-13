import isEmpty from 'lodash/isEmpty';
import {
    CLEAR_TAGS,
    ADD_TAG,
    REMOVE_TAG,
} from '../actions/tagListActions';
import initialState from '../../initialState';

const tagListReducers = (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_TAGS:
            return [];
        case ADD_TAG:
            const current = [...state.tags];
            current.push(action.tag);

            return {
                ...state,
                tags: current,
            };
        case REMOVE_TAG:
            const newTags = [...state.tags.filter(tag => action.tag !== tag)];
            const newPhotosData = !isEmpty(newTags) ? newTags : [];

            return {
                ...state,
                photosData: newPhotosData,
                tags: newTags,
            };
        default:
            return state;
    }
};

export default tagListReducers;
