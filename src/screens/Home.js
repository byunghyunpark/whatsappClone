import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


export default class Home extends React.Component {
    static navigationOptions = {
        title: "Home Screen"
    } 

    render() {
        return (
            <View style={styles.container}>
                <Button title="Navigate to ChatScreen" onPress={() => this.props.navigation.navigate('chat', { name: 'John' })} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
