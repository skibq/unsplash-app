import React from "React";
import Collection, { ICollection } from "./Collection"
import { useEffect } from "react";
import { getCollectionPhotos } from "../../store/actions/collections"
import store from "../../store";

interface ICollectionContainer {
    collection: ICollection
}

const CollectionContainer = ({ collection }: ICollectionContainer) => {
    useEffect(() => {
        if (collection.photos.length) {
            return;
        }
        // todo: resolve issue with types
        // @ts-ignore
        store.dispatch(getCollectionPhotos(collection.id))
    }, []);

    return <><Collection collection={collection} /></>
};

export default CollectionContainer;
