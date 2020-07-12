import React from "react"
import styled from "styled-components"
import { IImage } from "../collections/Collection";

const Image = styled.img`
    width: auto;
    max-width: 100%;
`;
const ImageWrapper = styled.div`
    margin-top: 50px;
    text-align: center;
`;
const Likes = styled.p`
    font-size: 14px;
`;
const ImageTitle = styled.h1`
    font-size: 26px;
`;

const Photo = ({photo}: {photo: IImage}) => {
    const LikesWrapper = ({children}: {children: number}) => <Likes>Likes - {children}</Likes>;

    return(
        <>
            <ImageWrapper>
                <ImageTitle>{photo.description}</ImageTitle>
                <LikesWrapper>{photo.likes}</LikesWrapper>
                <Image src={photo.urls.regular} alt=""/>
            </ImageWrapper>
        </>
    )
};

export default Photo
