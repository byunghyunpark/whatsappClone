import React, { Component } from 'react';
import { login } from '../services/api';
import styles from '../styles/common';
import authService from '../services/authService';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ImageBackground,
    TouchableHighlight,
    Image,
    TouchableOpacity,
    Keyboard,
    ScrollView,
    TextInput,
} from 'react-native';
import { NavigationActions } from 'react-navigation';


export default class Login extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Login', // to add letter spacing on Android,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    })

    state = {
        user: '',
        password: '',
        error: false
    }

    async submit() {
        try {
            const response = await login(this.state.user, this.state.password)
            this.clearAndNavigate('home')
        } catch ({ message }) {
            this.setState({
                error: message
            })
        }
    }

    clearAndNavigate(screen) {
        this.setState({
            user: '',
            password: ''
        })
        Keyboard.dismiss();
        authService.isAuthenticated = true;
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: screen })
            ]
        })
        this.props.navigation.dispatch(resetAction)
    }

    clearValidationErrors() {
        this.setState({
            error: false
        })
    }

    render() {
        return (
            <View
                style={styles.container}>
                <Image
                    style={[styles.logo]}
                    source={require('../assets/imgs/logo.png')} />
                <ScrollView style={styles.container}>
                    <TextInput
                        ref={(textInput) => this._user = textInput}
                        style={styles.inputField}
                        value={this.state.text}
                        onChangeText={(user) => this.setState({ user })}
                        onSubmitEditing={(event) => this._password.focus()}
                        onFocus={() => this.clearValidationErrors()}
                        editable={true}
                        maxLength={40}
                        multiline={false}
                        placeholder="Phone number, username or email"
                    />
                    <TextInput
                        ref={(textInput) => this._password = textInput}
                        style={styles.inputField}
                        value={this.state.text}
                        onChangeText={(password) => this.setState({ password })}
                        onSubmitEditing={(event) => this.submit()}
                        editable={true}
                        secureTextEntry={true}
                        maxLength={40}
                        multiline={false}
                        placeholder="Password"
                    />
                    {this.state.error &&
                        <View style={styles.validationErrors}>
                            <Text style={styles.error}>{this.state.error}</Text>
                        </View>
                    }
                    <Button onPress={() => this.submit()} title="Login" />
                    <View style={styles.redirectLink}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
                            <Text style={styles.link}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
