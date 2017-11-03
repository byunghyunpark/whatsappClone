import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'transparent',
        // justifyContent: 'center',
    },
    listItem: {
        width: '70%',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10
    },
    outgoingMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#E1FFC7'
    }, 
    mainPhoto: {
        flex: 1,
        margin: 10,
        marginBottom: 0,
        justifyContent: 'center',
    },
    mainPhotoEnd: {
        marginBottom: 10
    },
    mainOpacity: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    mainTitle: {
        color: 'white',
        fontSize: 30,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: '700',
    },
    mainDescription: {
        flex: 2.3,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
    },
    alignRight: {
        textAlign: 'right'
    },
    backgroundWhite: {
        flex: 1,
        backgroundColor: 'white'
    },
    composeText: {
        width: '80%',
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: 'white',
        borderColor: '#979797',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    compose: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    logo: {
        width: '100%',
        height: 200
    },
    inputField: {
        marginTop: 20,
        alignSelf: 'center',
        height: 55,
        width: '80%',
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: "#CACACA"
    },
    redirectLink: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    link: {
        color: 'blue'
    },
    validationErrors: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    error: {
        marginTop: 10,
        textAlign: 'center',
        color: 'red'
    },
    textHeader: {
        fontSize: 20,
    }
});
