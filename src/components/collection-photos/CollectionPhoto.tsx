import styled from "styled-components";
import {IImage} from "../collections/Collection";
import {Link} from "react-router-dom";
import React from "react";

const PhotoWithOverlayWrapper = styled.div`
    position: relative;
`;

const Photo = styled.img`
    width: 250px;
    height: 180px;
    object-fit: cover;
    margin: 10px;
    max-width: calc(100% - 20px);
    font-size: 0px;
`;

const Overlay = styled.div`
    box-sizing: border-box;
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    padding: 10px;
    color: #fff;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    background-color: rgba(0, 0, 0, 0.75);
    &:hover {
        opacity: 1;
    }
`;

const OverlayContent = ({image}: {image: IImage}) => {
    const Country = () => (
        image.location && image.location.country ? <p>Country: {image.location.country}</p> : <></>
    );

    return(
        <>
            <p>Likes: {image.likes}</p>
            <p>Downloads: {image.downloads}</p>
            <Country />
        </>
    )
};

const PhotoWithOverlay = ({image}: {image: IImage}) => {
    return(
        <PhotoWithOverlayWrapper>
            <Overlay>
                <OverlayContent image={image}/>
            </Overlay>
            <Photo src={image.urls.regular} alt={image.alt_description} />
        </PhotoWithOverlayWrapper>
    )
};

const SinglePhoto = ({photo}: {photo: IImage}) => {
    return(
        <Link to={location => ({ ...location, pathname: `${location.pathname}/photo/${photo.id}` })}>
            <PhotoWithOverlay image={photo} />
        </Link>
    )
};

export default SinglePhoto
