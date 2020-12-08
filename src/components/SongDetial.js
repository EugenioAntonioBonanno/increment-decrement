import React from 'react';
import { connect } from 'react-redux';

const SongDetial = ({ song }) => {
  if (!song) {
    return <div>Select a song!</div>
  }
  return (
    <div>
      <h3>Detials for:</h3>
      <p>Title: {song.title}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
};

// This is where you set the keys that will show up in the props object 
// of your component
const mapStateToProps = (state) => {
 return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetial);