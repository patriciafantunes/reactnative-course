import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import style from './styles';
import ArtCollectionItem from '../ArtCollectionItem';

export default function ArtCollectionList(props) {
    return(
        <ScrollView>
            <View>
                <Text style={style.title}>Collections with search {props.searchValue}</Text>
            </View>
            
            {props.data.collections
                .filter(nft => nft.name.toLowerCase().includes(props.searchValue.toLowerCase()))
                .map(nft => <ArtCollectionItem key={nft.name} item={nft} />
                )}
        </ScrollView>
    )
}


/* export default class ArtCollectionList extends React.Component {

    render() {
        return(
            <ScrollView>
                <View>
                    <Text style={style.title}>Collections with search {this.props.searchValue}</Text>
                </View>
                {this.props.data.collections
                    .filter(nft => nft.name.toLowerCase().includes(this.props.searchValue.toLowerCase()))
                    .map(nft => <ArtCollectionItem key={nft.name} item={nft} />
                    )}

                
                {/* {NTFList.map((item) => {
                    return <ArtCollectionItem key={item.title} item={item} />
                }) }  }
            </ScrollView>
        )
    }
} */