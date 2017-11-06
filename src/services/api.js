import { 
    signup, 
    login, 
    initialize,
    setListener,
    pushData
} from './firebase';

export {
    login,
    signup
}

export const initApi = () => initialize();


export const getMessages = (updaterFn) => setListener('messages', updaterFn);


export const postMessage = (message) => {
    if (Boolean(message)) {
        return pushData('messages', {
            incoming: false,
            message
        })
    }
}
