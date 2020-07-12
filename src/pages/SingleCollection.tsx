import React from "react";
import { route } from './router'
import CollectionPhotosContainer from "../components/photos/CollectionPhotosContainer"


const name = 'SingleCollection';
const path = '/collection/:collectionId';

const SingleCollection = () => {
    return <CollectionPhotosContainer />
};

export default {
    component: SingleCollection,
    name,
    path
} as route
