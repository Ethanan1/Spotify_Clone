import './App.css';
import Login from './Login'
import { getTokenFromResponse } from './spotify';
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken ] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue(); //allows us to pull from data layer

  //run code based of condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })
      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER_',
          user: user,
        })
      })
    }

    console.log('I HAVE TOKEN', token);

  }, []);

  console.log("USER: look here ", user);
  console.log("TOKEN WOO:", token);
  
  return (
    <div className="app">
      {
        token ?
        <Player />
        : <Login />
      }

    </div>
  );
}

export default App;
