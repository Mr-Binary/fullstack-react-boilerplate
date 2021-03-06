import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import configureStore from './store';

const store = configureStore();

function renderWrapper(Component) {
    render(
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
}

renderWrapper(App);

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./components/App', () => {
            renderWrapper(App);
        });
    }
}
