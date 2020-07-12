import MainPage from './MainPage';
import SingleCollection from './SingleCollection';
import CollectionPhoto from "./CollectionPhoto";

export interface route {
    name: string,
    path: string,
    component: React.FC
}

export const routes: Array<route> = [
    CollectionPhoto,
    SingleCollection,
    MainPage,
];
