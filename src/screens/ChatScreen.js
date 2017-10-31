import { getMockData } from '../services/api';

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList
} from 'react-native';


export default class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })


    state = {
        messages: []
    }

    render() {
        return (
            <View>
                <Text>Chat with John!!!</Text>
                <FlatList
                    data={this.state.messages}
                    renderItem={({ item }) =>
                        <View>
                            <Text>{item.message}</Text>
                        </View>
                    }
                    keyExtractor={(item, index) => (`message-${index}`)}
                />
                <Button title="Navigate to HomeScreen" onPress={() => this.props.navigation.navigate('home')} />
            </View>
        )   
    }

    componentDidMount() {
        getMockData().then((messages) => {
            this.setState({
                messages
            })
        });
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
