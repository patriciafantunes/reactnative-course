import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../containers/ArtFavoritesScreen";
import ArtCollectionDetail from "../containers/ArtCollectionDetail";

const Stack = createNativeStackNavigator();

export default function HomeNavigation () {
    return(
        <Stack.Navigator >
            <Stack.Screen name="Home Screen" component={HomeScreen} />
            <Stack.Screen name="Details" component={ArtCollectionDetail} />
        </Stack.Navigator>
    )
}