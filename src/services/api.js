import { 
    signup, 
    login, 
    initialize,
    setListener,
    pushData
} from './firebase';


export const initApi = () => initialize();


export {
    login,
    signup
}

export const getMessages = (updaterFn) => setListener('messages', updaterFn);

export const postMessage = (message) => {
    if (Boolean(message)) {
        pushData('messages', {
            incoming: false,
            message
        })
    }
}