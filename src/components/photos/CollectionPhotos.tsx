import React  from 'react';
import { IImage } from "../collections/Collection";
import styled from "styled-components";

interface IPhotoList {
    photos: Array<IImage>
}

const PhotosWrapper = styled.div`
    margin: auto auto;
    width: 80%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Photo = styled.img`
    width: 250px;
    height: 180px;
    object-fit: cover;
    margin: 10px;
`;

const ListOfPhotos = ({photos}: IPhotoList) => {
    return(
        <>{ photos.map(photo => <Photo src={photo.urls.regular} key={photo.id} alt={photo.alt_description} />) }</>
    )
};



const CollectionPhotos = ({ photos }: IPhotoList) => {
    return(
        <PhotosWrapper>
            <ListOfPhotos photos={photos} />
        </PhotosWrapper>
    )
};

export default CollectionPhotos
