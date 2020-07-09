import React, { useState, useEffect } from "react";
import unsplash from "../../services/unsplash";
import { ThumbnailContainer, ThumbnailsContainer, Thumbnail, CollectionTitle, CollectionContainer } from "./CollectionStyledComponents";

interface ICollection {
    id: number;
    title: string;
}
interface ICollectionProps {
    collection: ICollection;
}
interface IImage {
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
    const [collectionPhotos, updateCollectionPhotos] = useState([]);

    useEffect(() => {
        unsplash.collections.getCollectionPhotos(collection.id)
            .then(rawData => rawData.json())
            .then(res => updateCollectionPhotos(res));
    }, []);

    const CollectionThumbnails = () => {
        const thumbnails =  collectionPhotos.map((image:  IImage) => {
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
        <CollectionContainer>
            <CollectionTitle>{ collection.title }</CollectionTitle>
            <ThumbnailsContainer>
                <CollectionThumbnails />
            </ThumbnailsContainer>
        </CollectionContainer>
    )
};

export default Collection;
