import {ActionTypes, ICollectionActions} from '../actions/collections'
import {ICollection} from "../../components/collections/Collection";

const collections = (state: Array<ICollection> = [], action: ICollectionActions) => {
    switch (action.type) {
        case ActionTypes.UPDATE_COLLECTIONS:
            return action.collections ? action.collections : state;
        case ActionTypes.ADD_PHOTOS_TO_COLLECTION:
            return state.map((collection) => {
                if (collection.id !== action.collectionId) return collection;

                return {...collection, photos: [...collection.photos, ...action.photos ]}
            });
        case ActionTypes.EXTEND_COLLECTION_PHOTO:
            return state.map((collection) => {
                const updatedPhotos = collection.photos.map((photo) => {
                    return photo.id === action.photoId ? {...photo, ...action.photo, extendedPhotoInfo: true} : photo
                });
                return {...collection, photos: updatedPhotos}
            });
        case ActionTypes.START_FETCHING_COLLECTION_PHOTOS:
            return state.map((collection) => {
                if (collection.id !== action.collectionId) return collection;

                return {...collection, photosAreFetching: true}
            });
        case ActionTypes.FINISH_FETCHING_COLLECTION_PHOTOS:
            return state.map((collection) => {
                if (collection.id !== action.collectionId) return collection;

                return {...collection, photosAreFetching: false}
            });
        case ActionTypes.INCREASE_REACHED_PAGE:
            return state.map((collection) => {
                if (collection.id !== action.collectionId) return collection;
                return {...collection, nextPageToFetch: (collection.nextPageToFetch + 1)}
            });
        default:
            return state
    }
};

export default collections
