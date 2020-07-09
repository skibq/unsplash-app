import React from "react";
import { route } from './index'
import { Collections } from "../components/collections/Collections"

const name = 'Main Page';
const path = '';

const MainPage = () => {
    return <Collections />
};

export default {
    component: MainPage,
    name,
    path
} as route
