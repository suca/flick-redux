import fetchDataClient from './fetchDataClient';
import {
    requestPhotos,
    receivePhotos,
    clearPhotos,
} from '../actions/photosActions';
import {
    APP_FLICKR_URL,
} from './constants';

export const photosService = (tag) => {
    return (dispatch) => {
        dispatch(requestPhotos(tag));

        return fetchDataClient(`${APP_FLICKR_URL}${tag}`)
            .then(json => {
                dispatch(receivePhotos(json))
            })
    };
};

export const photosLocalService = () => {
    return (dispatch) => {
        dispatch(clearPhotos());
    };
};
