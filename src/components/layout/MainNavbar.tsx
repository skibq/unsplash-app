import React from "react";
import MainPage from "../../pages/MainPage";
import { Link } from "react-router-dom"

const menuStructure = [
    MainPage
];

const mappedLinks = () => {
    return menuStructure.map((menuItem) => {
        return <Link to={menuItem.path} key={menuItem.path}>{ menuItem.name }</Link>
    })
};

export default () => {
    return(
        <nav>
            { mappedLinks() }
        </nav>
    )
}
