import React from 'react';

const AudioPlayer = ({ src }) => {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
