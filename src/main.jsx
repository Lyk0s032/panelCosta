import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './componentes/store/store.js'
import axios from 'axios'

axios.defaults.baseURL = 'https://panelapicosta-production.up.railway.app';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>,
  </Provider>

)
