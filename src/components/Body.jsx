
/*
import React, { Component } from 'react';

import Spotify from 'spotify-web-api-js';

const spotifyWebApi = new Spotify();


class Body extends Component {

  getNowPlaying() {
       spotifyWebApi.getMyCurrentPlaybackState()
         .then((response) => {
           this.setState({
             nowPlaying: {
               name: response.item.name,
               albumArt: response.item.album.images[0].url
             }
           });
         });
  }


  render() {
    return (
      
        
        <div className="body">
       
       <div>
          Now Playing: {this.state.nowPlaying.name}
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }} />
        </div>
      
      </div>
    );
  }
}

export default Body; */