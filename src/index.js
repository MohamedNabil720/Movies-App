import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'

import { Provider } from 'react-redux'
import { store } from './Store/store';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWY0MDc2ZjE3OWM1ZmNkOTk5ZDQ0ZmI5YTQyY2QzYSIsIm5iZiI6MTcyNjI1MjAyMS4wMDUxNzgsInN1YiI6IjY2MmFmY2NiZThkMGI0MDExZTExMWU2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1B6T-r48oLX2iUi8w6sgcvspDQ20Npt9ytEL2pSzG0`

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  <Provider store={store}>
    <App />
  </Provider>


);


