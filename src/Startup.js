import React from 'react';
import App from './App';
import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import i18n from './i18n';

import registerServiceWorker from './registerServiceWorker';


const Startup = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    );
}    
ReactDOM.render(<Startup/>, document.getElementById("root"))

registerServiceWorker();

export default Startup;