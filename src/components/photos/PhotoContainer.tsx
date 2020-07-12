import React, { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getImage } from "../../services/unsplash";
import Photo from "./Photo"

const PhotoContainer = () => {
    const { photoId } = useParams();
    const [photo, updatePhoto] = useState();

    useEffect(() => {
        getImage(photoId).then((photo) => {
            updatePhoto(photo);
        })
    }, []);

    return photo ? <Photo photo={photo} />: <></>

};

export default PhotoContainer
