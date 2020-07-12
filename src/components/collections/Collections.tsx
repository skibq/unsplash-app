import React from "react";
import { Link } from "react-router-dom";
import { ICollection } from "./Collection";
import CollectionContainer from "./CollectionContainer";
import { CollectionsWrapper } from './CollectionStyledComponents';

interface ICollectionProps {
  collections: Array<ICollection>;
}

const Collections = ({ collections }: ICollectionProps) => {
  const CollectionsList = collections.map((collection) => {
    const collectionLink = `/collection/${collection.id}`;

    return <Link to={collectionLink} key={collection.id}><CollectionContainer collection={collection} /></Link>
  });

  return <CollectionsWrapper>{ CollectionsList }</CollectionsWrapper>;
};

export default Collections;
