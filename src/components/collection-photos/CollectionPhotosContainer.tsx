import React, { useEffect, useState } from "react";
import { ICollection } from "../collections/Collection";
import store, { IGlobalState } from "../../store";
import { getCollections, getCollectionPhotos } from "../../store/actions/collections";
import CollectionPhotos from "./CollectionPhotos"
import { connect, ConnectedProps } from "react-redux"
import { useParams } from "react-router"

interface PropsFromRedux extends ConnectedProps<typeof connector> {}

const getCollectionByCollectionId = (collections: Array<ICollection>, collectionId: number) => {
    const collection = collections.find((collection) => {
        return collection.id === collectionId
    });
    return collection;
};

const isBottomReached = () => {
    return window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
};

const CollectionPhotosContainer = ({ collections }: PropsFromRedux) => {
    const { collectionId } = useParams();
    const parsedCollectionId = parseInt(collectionId);
    const collection = getCollectionByCollectionId(collections, parsedCollectionId);
    const [needToFetchImages, setNeedToFetchImages] = useState(false);

    const fetchNecessaryData = () => {
        if (collections.length) return;
        // @ts-ignore todo: fix issue with types
        store.dispatch(getCollections()).then(() => {
            // @ts-ignore todo: fix issue with types
            store.dispatch(getCollectionPhotos(parsedCollectionId));
        });
    };

    const handleScroll = () => {
        if (!isBottomReached()) return;
        setNeedToFetchImages(true)
    };

    useEffect(() => {
        fetchNecessaryData();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!needToFetchImages) return;
        // @ts-ignore todo: fix issue with types
        store.dispatch(getCollectionPhotos(parsedCollectionId, collection.nextPageToFetch)).then(() => {
            setNeedToFetchImages(false);
        });
    }, [needToFetchImages]);


    return collection ? <CollectionPhotos photos={collection.photos} collectionId={collection.id} /> : <></>
};

const mapStateToProps = (state: IGlobalState) => ({
    collections: state.collections
});

const connector = connect(mapStateToProps);

export default connector(CollectionPhotosContainer);
