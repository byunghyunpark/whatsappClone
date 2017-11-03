import React from 'react';
import { NavigationActions } from 'react-navigation'


class AuthService {

    _isAuthenticated = false

    set isAuthenticated(bool) {
        this._isAuthenticated = bool;
    }

    get isAuthenticated() {
        return this._isAuthenticated
    }

    checkAuth() {
        return new Promise(resolve => setTimeout(() => resolve(this.isAuthenticated), 1000))
    }
}

const authService = new AuthService(false);

export const authDecorator = (Component) => {
    return class AuthChecker extends React.Component {
        static navigationOptions = Component.navigationOptions;

        state = {
            auth: false
        }

        componentDidMount() {
            authService.checkAuth().then(isAuthenticated => {
                if (isAuthenticated) {
                    this.setState({ auth: true })
                } else {
                    const resetAction = NavigationActions.reset({
                        index: 1,
                        actions: [
                            NavigationActions.navigate({ routeName: 'home' }),
                            NavigationActions.navigate({ routeName: 'login' })
                        ]
                    })
                    this.props.navigation.dispatch(resetAction)
                }
            });
        }

        render() {
            return <Component 
                {...this.props}/>
        }
    }
}


export default authService;
