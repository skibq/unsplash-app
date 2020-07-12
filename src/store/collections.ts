import { ICollection } from "../components/collections/Collection";

export interface ICollectionsState {
    collections: Array<ICollection>;
}

export const initialState: ICollectionsState  = {
    collections: []
};
