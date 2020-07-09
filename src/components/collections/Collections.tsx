import React, { useState, useEffect } from "react";
import unsplash from "../../services/unsplash";
import Collection from "./Collection";
import styled from "styled-components";

const CollectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Collections = () => {
  const [collections, updateCollections] = useState([]);

  const fetchCollectionsList = () => {
    unsplash.collections.listCollections()
        .then(rawData => rawData.json())
        .then(res => updateCollections(res));
  };

  useEffect(() => {
    fetchCollectionsList()
  }, []);

  const CollectionsList = collections.map((collection) => {
    return <Collection key={collection.id} collection={collection} />
  });

  return <CollectionsContainer>{ CollectionsList }</CollectionsContainer>;
};
