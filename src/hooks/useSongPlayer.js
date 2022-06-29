import { useContext, useState } from "react";
import { MusicContext } from "../Context/songContext";


const useSongPlayer = () => {
  const [state, setState] = useContext(MusicContext);

  function playTrack(index,track) {
    console.log("index----",index,"track:",track);
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState({ ...state, isPlaying: !state.isPlaying });
  }

  function playPreviousTrack() {
    let newIndex = null;
    state.currentTrackIndex === 0
      ? (newIndex = state.tracks.length - 1)
      : (newIndex = state.currentTrackIndex - 1);
    playTrack(newIndex);
  }

  function playNextTrack() {
    let newIndex = null;
    state.currentTrackIndex === state.tracks.length - 1
      ? (newIndex = 0)
      : (newIndex = state.currentTrackIndex + 1);
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackId:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].id,
    currentTrackImg:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].src,
    currentTrackName:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].name,
    currentTrackTitle:state.currentTrackIndex !== null && state.tracks[state.currentTrackIndex].title,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,


  };
};

export default useSongPlayer;
