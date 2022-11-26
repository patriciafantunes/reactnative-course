

import React from "react";
import {View} from "react-native"
import ArtCollectionList from "../components/ArtCollectionList";
import SearchBar from "../components/SearchBar";

import {useSelector} from "react-redux"

const ArtCollectionListScreen = () => {

  const [search, setSearch] = useState("");
  const data = useSelector(state => state.collection.value)
  
    return (
        <View>
            <SearchBar updateSearch={text => setSearch(text)} />
            <ArtCollectionList data={data} searchValue={search} />
        </View>
    )
}

export default ArtCollectionListScreen