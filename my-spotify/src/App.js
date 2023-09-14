import './App.css';
import Login from './Login'
import { getTokenFromResponse } from './spotify';
import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken ] = useState(null);

  //run code based of condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log('user:', user);
      })
    }

    console.log('I HAVE TOKEN', token);
  }, []);

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
