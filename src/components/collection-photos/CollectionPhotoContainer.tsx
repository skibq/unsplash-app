import React, { useEffect } from "react"
import CollectionPhoto from './CollectionPhoto'
import { IImage } from "../collections/Collection";
import store from "../../store"
import { extendCollectionPhotoInfo } from "../../store/actions/collections"

const CollectionPhotoContainer = ({photo, collectionId}: {photo: IImage, collectionId: number}) => {
    useEffect(() => {
        if (photo.extendedPhotoInfo) return;
        // @ts-ignore todo: fix issue with types
        store.dispatch(extendCollectionPhotoInfo(collectionId, photo.id))
    }, []);

    return <CollectionPhoto photo={photo} />
};

export default CollectionPhotoContainer
