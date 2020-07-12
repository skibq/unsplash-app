import React from "react";
import { ThumbnailContainer, ThumbnailsContainer, Thumbnail, CollectionTitle, CollectionWrapper } from "./CollectionStyledComponents";

export interface ICollection {
    id: number;
    title: string;
    photos: Array<IImage>;
    nextPageToFetch: number;
    photosAreFetching: boolean;
}
interface ICollectionProps {
    collection: ICollection;
}
export interface IImage {
    id: string;
    alt_description: string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        thumb: string;
    }
}

const Collection: React.FC<ICollectionProps> = ({collection}) => {
    const CollectionThumbnails = () => {
        const thumbnails = collection.photos.map((image:  IImage) => {
            return (
                <ThumbnailContainer key={image.id}>
                    <Thumbnail
                        src={image.urls.small}
                        alt={image.alt_description} />
                </ThumbnailContainer>
            )
        });
        return <>{ thumbnails }</>
    };

    return(
        <CollectionWrapper>
            <CollectionTitle>{ collection.title }</CollectionTitle>
            <ThumbnailsContainer>
                <CollectionThumbnails />
            </ThumbnailsContainer>
        </CollectionWrapper>
    )
};

export default Collection;
