import React from 'react';

import { ImageBackground, View, KeyboardAvoidingView, Platform, Text, StyleSheet, Button, FlatList, ScrollView, Alert } from 'react-native';
import Message from '../components/Message';
import Compose from '../components/Compose';
import store from '../store';
import { postMessageToServer, subscribeToGetMessagesFromServer, unSubscribeToGetMessagesFromServer } from '../actions';
import { getMessagesSelector } from '../reducers/messagesReducer';

import { connect } from 'react-redux';
import { authDecorator } from '../services/authService'


class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat Screen'
    }

    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0
    
    componentDidMount() {
        this.props.subscribeToGetMessagesFromServer();
    }

    componentWillUnmount() {
        this.props.unSubscribeToGetMessagesFromServer();
    }
    
    render() {
        return (
            <ImageBackground
                style={styles.container}
                source={require('../assets/background.png')}>
                <KeyboardAvoidingView
                    behavior="padding"
                    keyboardVerticalOffset={this.keyboardVerticalOffset}
                    style={styles.container}>
                    <ScrollView>
                        <FlatList
                            data={this.props.messages}
                            renderItem={Message}
                            /* keyExtractor={(item, index) => (`message-${index}`)} */
                        />
                    </ScrollView>
                    <Compose
                        navigation={this.props.navigation}
                        submit={this.props.postMessageToServer} />
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: getMessagesSelector(state)
    }
}

export default connect(mapStateToProps, { postMessageToServer, subscribeToGetMessagesFromServer, unSubscribeToGetMessagesFromServer })(authDecorator(ChatScreen))
    


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})
