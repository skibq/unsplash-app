import React, { useState } from "react";
import { route } from './router'
import PhotoContainer from "../components/photos/PhotoContainer"


const name = 'CollectionPhoto';
const path = '/collection/:collectionId/photo/:photoId';

const CollectionPhoto = () => {
    return <PhotoContainer  />
};

export default {
    component: CollectionPhoto,
    name,
    path
} as route
