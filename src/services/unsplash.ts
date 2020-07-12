import Unsplash from 'unsplash-js';
import { IImage } from "../components/collections/Collection";

const unsplash = new Unsplash({
    accessKey: "DrQGd0NaKyQ86vsQ8skZF65oMW1w9rpcsXZD1wV4Z1Y",
});

export const getCollectionsList = () => {
    return unsplash.collections.listCollections()
        .then(rawData => rawData.json())
};

export const getCollectionImages = (collectionId: number, page: number = 1): Promise<Array<IImage>> => {
    return unsplash.collections.getCollectionPhotos(collectionId, page)
        .then(rawData => rawData.json())
};

export const getImage = (photoId: string) => {
    return unsplash.photos.getPhoto(photoId).then(rawData => rawData.json())
};

export default unsplash;
