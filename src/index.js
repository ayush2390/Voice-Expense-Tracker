import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import App from './App';
import { Provider } from './context/context';

ReactDOM.render(
    <SpeechProvider appId='84719390-8a40-4623-8879-62f2dc27665a' language='en-US'>
    <Provider>
    <App />
    </Provider>
    </SpeechProvider>
, document.getElementById('root'));
