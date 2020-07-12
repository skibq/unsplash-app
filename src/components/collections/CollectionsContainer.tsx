import React, { useEffect } from "react";
import { connect, ConnectedProps } from 'react-redux'
import Collections from "./Collections";
import { IGlobalState } from "../../store";
import { getCollections } from "../../store/actions/collections"
import store from "../../store";

type PropsFromRedux = ConnectedProps<typeof connector>

const CollectionsContainer = ({ collections }: PropsFromRedux) => {
    useEffect(() => {
        if (!collections.length) {
            // @ts-ignore todo: fix issue with types
            store.dispatch(getCollections());
        }
    }, []);

    return <Collections collections={collections} />
};

const mapStateToProps = (state: IGlobalState) => ({
    collections: state.collections
});

const connector = connect(mapStateToProps);

export default connector(CollectionsContainer);
