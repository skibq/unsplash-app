import { ICollection, IImage } from '../../components/collections/Collection'
import { getCollectionImages, getCollectionsList, getImage } from '../../services/unsplash'
import { AppThunk } from "../index"

interface IAddPhotos {
    photos: Array<IImage>;
    collectionId: number;
}

interface IUpdateCollections {
    collections: Array<ICollection>;
}

interface IUpdateCollectionPhoto {
    photoId: string,
    collectionId: number,
    photo: IImage,
}

export enum ActionTypes {
    UPDATE_COLLECTIONS = 'UPDATE_COLLECTIONS',
    ADD_PHOTOS_TO_COLLECTION = 'ADD_PHOTOS_TO_COLLECTION',
    START_FETCHING_COLLECTION_PHOTOS = 'START_FETCHING_COLLECTION_PHOTOS',
    FINISH_FETCHING_COLLECTION_PHOTOS = 'FINISH_FETCHING_COLLECTION_PHOTOS',
    INCREASE_REACHED_PAGE = 'INCREASE_REACHED_PAGE',
    EXTEND_COLLECTION_PHOTO = 'EXTEND_COLLECTION_PHOTO',

}

export interface ICollectionActions extends IUpdateCollections, IAddPhotos, IUpdateCollectionPhoto {
    type: ActionTypes
}

export const startFetchingCollectionPhotos = (collectionId: number) => ({
    type: ActionTypes.START_FETCHING_COLLECTION_PHOTOS,
    collectionId
});

export const finishFetchingCollectionPhotos = (collectionId: number) => ({
    type: ActionTypes.FINISH_FETCHING_COLLECTION_PHOTOS,
    collectionId
});

export const increaseReachedPage = (collectionId: number) => ({
    type: ActionTypes.INCREASE_REACHED_PAGE,
    collectionId
});

export const updateCollectionPhoto = ({collectionId, photoId, photo}: IUpdateCollectionPhoto) => ({
    type: ActionTypes.EXTEND_COLLECTION_PHOTO,
    collectionId,
    photoId,
    photo
});

export const updateCollections = ({collections}: IUpdateCollections) => {
    const collectionsWithPhotos = collections.map(collection => {
        return {
            ...collection,
            photos: [],
            photosAreFetching: false,
            nextPageToFetch: 1,
        }
    });

    return {
        type: ActionTypes.UPDATE_COLLECTIONS,
        collections: collectionsWithPhotos
    }
};

export const addPhotosToCollection = ({photos, collectionId}: IAddPhotos) => ({
    type: ActionTypes.ADD_PHOTOS_TO_COLLECTION,
    collectionId,
    photos
});

export const getCollections = (): AppThunk => dispatch => {
    return getCollectionsList().then((collections) => {
        dispatch(updateCollections({collections}))
    })
};

export const getCollectionPhotos = (id: number, nextPageToFetch: number = 1): AppThunk => dispatch => {
    dispatch(startFetchingCollectionPhotos(id));

    return getCollectionImages(id, nextPageToFetch).then((photos) => {
        dispatch(addPhotosToCollection({photos, collectionId: id}));
        dispatch(finishFetchingCollectionPhotos(id));
        dispatch(increaseReachedPage(id));
    });
};

export const extendCollectionPhotoInfo = (collectionId: number, photoId: string): AppThunk => dispatch => {
    return getImage(photoId).then((photo) => {
        dispatch(updateCollectionPhoto({collectionId, photoId, photo}))
    })
};
