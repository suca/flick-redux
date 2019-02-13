export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const requestPhotos = (tag) => {
    return {
        type: 'REQUEST_PHOTOS',
        tag,
    };
};

export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const receivePhotos = (photos) => {
    return {
        type: RECEIVE_PHOTOS,
        photos,
    };
};

export const CLEAR_PHOTOS = 'CLEAR_PHOTOS';
export const clearPhotos = () => {
    return {
        type: CLEAR_PHOTOS,
        photos: [],
    }
};
