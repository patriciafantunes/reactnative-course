import React from "react";
import {Text} from 'react-native'
import ArtDetail from "../components/ArtDetail/ArtDetail";

export default function ArtCollectionDetail(props) {
    return(
        <ArtDetail key={props.route.params.slug} item={props.route.params.item}  /> 
    )
}