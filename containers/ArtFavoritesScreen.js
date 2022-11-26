import React from "react";
import {View} from "react-native"
import ArtCollectionList from "../components/ArtCollectionList";
import SearchBar from "../components/SearchBar";
import data from "../assets/collections3.json"
import { useState } from 'react'

const ArtFavoritesScreen = () => {
    const [search, setSearch] = useState("");
    return (
        <View>
            <SearchBar updateSearch={text => setSearch(text)} />
            <ArtCollectionList data={data} searchValue={search} />
        </View>
    )
}

export default ArtFavoritesScreen