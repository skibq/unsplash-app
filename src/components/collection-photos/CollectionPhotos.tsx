import React  from 'react';
import { IImage } from "../collections/Collection";
import styled from "styled-components";
import CollectionPhotoContainer from "./CollectionPhotoContainer";

interface IPhotoList {
    photos: Array<IImage>,
    collectionId: number,
}

const PhotosWrapper = styled.div`
    margin: auto auto;
    width: 80%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const CollectionPhotos = ({ photos, collectionId}: IPhotoList) => {
    return(
        <PhotosWrapper>
            { photos.map(photo => <CollectionPhotoContainer key={photo.id} photo={photo} collectionId={collectionId}/>) }
        </PhotosWrapper>
    )
};

export default CollectionPhotos
