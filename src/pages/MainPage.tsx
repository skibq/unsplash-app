import React from "react";
import { route } from './index'

const name = 'Main Page';
const path = '';

const MainPage = () => {
    return(
        <h1> Hello, World! </h1>
    )
};

export default {
    component: MainPage,
    name,
    path
} as route
