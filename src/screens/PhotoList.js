import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    TouchableHighlight,
    Image,
    ScrollView,
    Alert,
    CameraRoll,
    FlatList
} from 'react-native';


export default class PhotoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
        this.getPhotos = this.getPhotos.bind(this);
    }

    static navigationOptions = {
        title: 'Photo List',
        headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 0,
            elevation: 0,
        },
        headerTitleStyle: {
            color: '#000',
            fontSize: 20,
            textAlign: 'center',
            alignSelf: 'center',
        },
    };

    getPhotos = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
        .then(r => this.setState({ photos: r.edges }))
    }

    render() {
        return (
            <View style={styles.backgroundWhite}>
                <Button title="Get photos" onPress={this.getPhotos} />
                <FlatList
                    data={this.state.photos}
                    keyExtractor={(item, index) => `photo-${index}`}
                    renderItem={({ item: { node: { image: { height, width, uri }}}}) =>
                            <Image
                                style={{
                                    width: width * .1,
                                    height: height * .1
                                }}
                                source={{ uri }} />
                        }
                />
            </View>
        )
    }
}
