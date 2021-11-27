import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { contactsApi } from './redux/contacts/contactsSlice'
import { store, persistor } from './redux/store'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        {/* <ApiProvider api={contactsApi}> */}
        <App />
        {/* </ApiProvider> */}
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
)
