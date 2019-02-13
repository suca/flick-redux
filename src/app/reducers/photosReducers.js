import {
    REQUEST_PHOTOS,
    RECEIVE_PHOTOS,
    CLEAR_PHOTOS,
} from '../actions/photosActions';
import initialState  from '../../initialState';

const photosReducers = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PHOTOS:
            return {
                ...state,
                ...{ isLoading: true }
            };
        case RECEIVE_PHOTOS:
            const max = (
                action.photos.items.length >= state.maxItemsPerCall ?
                    state.maxItemsPerCall :
                    action.photos.items.length
            );

            return {
                ...state,
                ...{
                    isLoading: false,
                    photosData: [
                        ...state.photosData,
                        ...action.photos.items.splice(0, max)
                    ],
                }
            };
        case CLEAR_PHOTOS:
            return {
                ...state,
                ...{
                    photosData: [],
                }
            };
        default:
            return { ...state };
    }
};

export default photosReducers;
