import React from 'react';
import {View, Image, Text, Pressable, TouchableHighlight} from 'react-native';
import style from './styles'
import { useNavigation } from '@react-navigation/native';


export default ArtCollectionItem = (props) => {
    const image = props.item.image_url != null 
            ? props.item.image_url 
            : 'https://www.zefon.com/images/thumbs/default-image_600.png';

            const navigation = useNavigation();
            
        return (
            <Pressable 
                style={style.container} 
                onPress={() => navigation.navigate('Details', {
                    slug: props.item.slug,
                    item: props.item,
                  })}>
                <Image style={style.image} source={{uri: image}} />
                <View style={{flex: 1, flexDirection: "column"}}>
                    <View>
                        <Text>{props.item.name}</Text>

                    </View>
                    
                    <Text style={style.text}>{props.item.description}</Text>
                </View>
            </Pressable>
        )
}


/* export default class ArtCollectionItem extends React.Component {
    
    render() {
        const image = this.props.item.image_url != null 
            ? this.props.item.image_url 
            : 'https://www.zefon.com/images/thumbs/default-image_600.png';
            
        return(
            <Pressable style={style.container} onPress={() => alert(`${this.props.item.name}`)}>
                {console.log(this.props.item.image_url)}
                <Image style={style.image} source={{uri: image}} />
                <View style={{flex: 1, flexDirection: "column"}}>
                    <View>
                        <Text>{this.props.item.name}</Text>

                    </View>
                    
                    <Text style={style.text}>{this.props.item.description}</Text>
                </View>
            </Pressable>
        )
    }
} */


    