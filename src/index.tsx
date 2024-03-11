import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Provider } from 'react-redux';
import store from './services/store';

const container = document.getElementById('root');
const root = createRoot(container!)

root.render(
  <ConfigProvider appearance='light'>
    <AdaptivityProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AdaptivityProvider>
  </ConfigProvider>,
);
