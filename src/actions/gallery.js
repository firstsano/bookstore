import { CONTENTFUL_CALL } from '~/src/middleware/contentful';


export const
    FETCH_GALLERY_REQUEST = 'FETCH_GALLERY_REQUEST',
    FETCH_GALLERY_SUCCESS = 'FETCH_GALLERY_SUCCESS',
    FETCH_GALLERY_FAILURE = 'FETCH_GALLERY_FAILURE'
;

export const fetchGallery = () => ({
    [CONTENTFUL_CALL]: {
        method: 'getFavoriteProducts',
        types: [
            FETCH_GALLERY_REQUEST,
            FETCH_GALLERY_SUCCESS,
            FETCH_GALLERY_FAILURE
        ]
    }
});

export const requestGallery = () => ({
    type: FETCH_GALLERY_REQUEST,
});

export const fetchGallerySuccess = (response) => ({
    type: FETCH_GALLERY_SUCCESS,
    response
});

export const fetchGalleryFailure = () => ({
    type: FETCH_GALLERY_FAILURE
});
