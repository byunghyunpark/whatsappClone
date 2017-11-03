import React from 'react';
import { signup } from '../services/api';
import { Image, View, Keyboard, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, Platform, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';
import authService from '../services/authService';
import { NavigationActions } from 'react-navigation'

export default class Signup extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Sign Up', // to add letter spacing on Android,
        headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    })

    state = {
        user: '',
        password: ''
    }

    keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : 0


    async submit() {
        try {
            const response = await signup(this.state.user, this.state.password)
            console.log(JSON.stringify(response, null, 4));
            this._user.clear();
            this._password.clear();
            Keyboard.dismiss();
            authService.isAuthenticated = true;
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'home' })
                ]
            })
            this.props.navigation.dispatch(resetAction)
        } catch ({ message }) {
            this.setState({
                error: message
            })
        }
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
                    <Button onPress={() => this.submit()} title="SignUp" />
                    <View style={styles.redirectLink}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
                            <Text style={styles.link}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
