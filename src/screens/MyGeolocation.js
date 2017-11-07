import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default class Geolocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '2',
            longitude: '2'
        }
        // setInterval(() => {
        //     this.setState({ latitude: 1234, longitude: 4567 })
        // }, 1000);
    }

    static navigationOptions = {
        title: 'Geolocation',
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

    async componentDidMount() {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            this.setState({
                latitude: crd.latitude,
                longitude: crd.longitude
            })
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };

        navigator.geolocation.getCurrentPosition((value) => success(value), error, options);
    }

    render() {
        return (
            <View>
                <Text>This is Geolocation</Text>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
            </View>
        )
    }
}