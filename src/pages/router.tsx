import MainPage from './MainPage';
import SingleCollection from './SingleCollection';

export interface route {
    name: string,
    path: string,
    component: React.FC
}

export const routes: Array<route> = [
    SingleCollection,
    MainPage
];
