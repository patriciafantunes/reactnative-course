import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function SearchBar(props) {
    return(
        <View style={{display: 'flex', justifyContent:'flex-start', alignItems: 'center', marginBottom: 20 }}>
            <TextInput style={{textAlign: 'left'}} placeholder="Insert a name" onChangeText={text => props.updateSearch(text)} />
        </View>
    )
}
