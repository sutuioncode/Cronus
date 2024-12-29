import React from 'react';
import { DevSettings } from 'react-native';
import Storybook from './.storybook'; // Adjust the path as needed
import App from './App';

const Root = () => {
    const [storybookActive, setStorybookActive] = React.useState(false);
    const toggleStorybook = React.useCallback(() => setStorybookActive(active => !active), []);

    React.useEffect(() => {
        if (__DEV__) {
            DevSettings.addMenuItem('Toggle Storybook', toggleStorybook);
        }
    }, [toggleStorybook]);

    return storybookActive ? <Storybook /> : <App />;
};


export default Root