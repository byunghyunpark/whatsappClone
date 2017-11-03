import * as firebase from "firebase";

export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyBNvwLcoBsnUPCL5fsuPzIzdLHdj0Q77Fc",
    authDomain: "watchappclone.firebaseapp.com",
    databaseURL: "https://watchappclone.firebaseio.com",
    projectId: "watchappclone",
    storageBucket: "watchappclone.appspot.com",
    messagingSenderId: "705163216919"
})

export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
}

export const login = (email, pass) => {
    return firebase.auth()
        .signInWithEmailAndPassword(email, pass)
}
    
export const logout = () =>
    firebase.auth().signOut()

export const signup = (email, pass) => {
    return firebase.auth().createUserWithEmailAndPassword(email, pass);
}
    