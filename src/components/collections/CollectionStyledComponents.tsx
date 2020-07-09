import styled from "styled-components";

const collectionSize = 300;
const thumbMargin = 5;

export const CollectionContainer = styled.div`
    margin: 40px 0;
    width: ${collectionSize}px;
    @media (min-width: 600px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const CollectionTitle = styled.h2`
    text-align: center;
    margin: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 21px;
    color: #3a3a3a;
    font-weight: 200;
`;

// todo add breakpoints to theme variables
export const ThumbnailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;    
`;

export const ThumbnailContainer = styled.div`
    width: ${collectionSize / 3 - (thumbMargin / 3 * 2)}px;
    height: ${collectionSize / 3}px;
    margin-top: ${thumbMargin}px;
    &:nth-child(5n+1), &:nth-child(5n+2) {
        width: ${collectionSize / 2 - thumbMargin / 2}px;
        height: ${collectionSize / 2}px;
    }
`;
