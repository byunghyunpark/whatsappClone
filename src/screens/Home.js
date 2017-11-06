import React, { Component } from 'react';
import styles from '../styles/common';
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
    CameraRoll
} from 'react-native';


export default class Home extends React.Component {
    static navigationOptions = {
        title: 'LUXLAB',
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
        // headerRight: <Image 
        //                 onPress={() => this.props.navigation.navigate('DrawerOpen')}
        //                 source={require('../assets/imgs/menu.png')}
        //                 style={styles.icon}/>,
        
    };


    alert() {
        Alert.alert(
            'Here goes Alert title',
            'My first Api test in ApiPlayground',
            [
                {
                    text: 'Continue',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'), style:
                    'cancel'
                },
                {
                    text: 'Exit',
                    onPress: () =>
                        Alert.alert('Are you sure?', '', [
                            { text: 'Ok' },
                            { text: 'Cancel', style: 'cancel' }]),
                    style: 'destructive'
                }
            ],
            { cancelable: true }
        )
    }

    render() {
        return (
            <View style={styles.backgroundWhite}>    
                <TouchableHighlight
                    style={styles.container}
                    underlayColor="#fff"
                    onPress={() => this.props.navigation.navigate('chat', { name: 'John' })}>
                    <ImageBackground
                        source={require('../assets/main1.jpg')}
                        style={[styles.mainPhoto, styles.mainOpacity]}>
                        <View style={styles.mainOpacity}>
                            <Text style={styles.mainTitle}>중고 명품 구매</Text>
                            <Text style={styles.mainDescription}>검증받은 다양한 명품들을{"\n"}간편하게 볼 수 있습니다</Text>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={styles.container}
                    onPress={() => this.props.navigation.navigate('photos')}>
                    <ImageBackground
                        source={require('../assets/main2.jpg')}
                        style={styles.mainPhoto}>
                        <View style={styles.mainOpacity}>
                            <Text style={[styles.mainTitle, styles.alignRight]}>수선 견적 문의</Text>
                            <Text style={[styles.mainDescription, styles.alignRight]}>몇 가지 정보 입력으로{"\n"}수선 견적을 받아보세요</Text>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={styles.container}
                    onPress={this.alert}>
                    <ImageBackground
                        source={require('../assets/main3.jpg')}
                        style={[styles.mainPhoto, styles.mainPhotoEnd]}
                        >
                        <View style={styles.mainOpacity}>
                            <Text style={styles.mainTitle}>중고 명품 판매</Text>
                            <Text style={styles.mainDescription}>몇 가지 정보 입력으로{"\n"}매매 견적을 받아보세요</Text>
                        </View>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
        )
    }
}
