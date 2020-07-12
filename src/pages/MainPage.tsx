import React from "react";
import { route } from './router'
import CollectionsContainer from "../components/collections/CollectionsContainer"

const name = 'Main Page';
const path = '/';

const MainPage = () => {
    return <CollectionsContainer />
};

export default {
    component: MainPage,
    name,
    path
} as route
