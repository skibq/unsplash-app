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
    description: string;
    extendedPhotoInfo: Boolean;
    alt_description: string;
    likes: number;
    downloads?: number;
    location: {
        country: string;
        city: string;
    };
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
        const collectionPhotos = collection.photos.slice(0, 10);
        const thumbnails = collectionPhotos.map((image:  IImage) => {
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
