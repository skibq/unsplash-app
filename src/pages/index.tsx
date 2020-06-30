import MainPage from './MainPage';

export interface route {
    name: string,
    path: string,
    component: React.FC
}

export const routes: Array<route> = [
    MainPage
];
