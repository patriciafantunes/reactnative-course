import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ArtFavoritesScreen from "../containers/ArtFavoritesScreen";
import ArtCollectionDetail from "../containers/ArtCollectionDetail";

const Stack = createNativeStackNavigator()

const FavoritesNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={ArtFavoritesScreen} />
            <Stack.Screen name="Details" component={ArtCollectionDetail} />
        </Stack.Navigator>
    )
}

export default FavoritesNavigation