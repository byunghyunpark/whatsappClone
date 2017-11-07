import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ChatScreen from '../screens/ChatScreen';
import PhotoList from '../screens/PhotoList';
import MyGeolocation from '../screens/MyGeolocation';

import { StackNavigator } from 'react-navigation';


const routes = {
    home: { screen: Home },
    login: { screen: Login },
    signup: { screen: SignUp },
    chat: { screen: ChatScreen },
    photos: { screen: PhotoList },
    mygeolocation: { screen: MyGeolocation }
}

export default routes;
