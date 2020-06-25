import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import tasks  from "./reducers/index";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


const store = createStore(tasks)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
