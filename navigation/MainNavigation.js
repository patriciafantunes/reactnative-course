import React from "react"
import {Text} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome"
import FavoritesNavigation from "./FavoritesNavigation"
import HomeNavigation from "./HomeNavigation"
Icon.loadFont()

const Tab = createBottomTabNavigator()
const MainNavigation = () =>{
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen
                    options={{
                        tabBarIcon: ({size, color}) => <Icon size={size} color={color} name="home"/>
                    }}
                    name="Home" 
                    component={HomeNavigation} 
                 />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({size, color}) => <Icon size={size} color={color} name="heart"/>
                    }}
                    name="Favourites" 
                    component={FavoritesNavigation} 
                 />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation