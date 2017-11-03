import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    ImageBackground,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { authDecorator, authService } from '../services/authService';
import {
    getMessages,
    postMessage
} from '../services/api';
import styles from '../styles/common';


class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`
    })

    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0
    
    state = {
        messages: []
    }

    getMessageRow(item) {
        return (
            <View style={[
                styles.listItem, item.incoming ?
                styles.incomingMessage :
                styles.outgoingMessage
            ]}>
            <Text>{item.message}</Text>
        </View>
        )
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
                                data={this.state.messages}
                                renderItem={({ item }) =>
                                    this.getMessageRow(item)
                                }
                                keyExtractor={(item, index) => (`message-${index}`)}
                            />
                        </ScrollView>
                        <Compose submit={postMessage}/>
                    </KeyboardAvoidingView>
                
            </ImageBackground>
        )   
    }

    componentDidMount() {
        this.unsubscribeGetMessages = getMessages((snapshot) => {
            this.setState({
                messages: Object.values(snapshot.val())
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribeGetMessages();
    }
}

class Compose extends React.Component {
    state = {
        text: ''
    }

    submit() {
        this.props.submit(this.state.text);
        console.log('set null');
        this.setState({
            text: ''
        })
        console.log(this.state.text);
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.compose}>
                <TextInput
                    style={styles.composeText}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing={(event) => this.submit()}
                    editable = {true}
                    maxLength = {40}/>
                <Button 
                    onPress={(text) => this.submit()}
                    title="send"/>
                <Button
                    title="go home"
                    onPress={() => this.props.navigation.navigate('home')}>
                </Button>
            </View>
        )
    }
}

export default authDecorator(ChatScreen)