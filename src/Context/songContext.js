// import React, { useState, createContext } from "react";

// export const SongContext = createContext();

// const SongContextProvider = (props) => {
//   const [songs, setSongs] = useState({
//     audioPlayer: new Audio(),
//     alltracks:
//     [
//       {id:1,
//         product: {
//           productName: "Styles",
//           singer: "Harry Styles",
//           productImage: "banner.jpg",
//         },
//         album: "Fine Line",
//         date: "4 days ago",
//         time: "4:00",
//       },
//       {id:2,
//         product: {
//           productName: "Falling in ",
//           singer: "Harry Styles",
//           productImage: "banner.jpg",
//         },
//         album: "New ",
//         date: "4 days ago",
//         time: "4:00",
//       },
//       {id:3,
//         product: {
//           productName: "Falling",
//           singer: "Harry Styles",
//           productImage: "banner.jpg",
//         },
//         album: "New Line",
//         date: "4 days ago",
//         time: "4:00",
//       },
//       {id:4,
//         product: {
//           productName: "Falling",
//           singer: "Harry Styles",
//           productImage: "banner.jpg",
//         },
//         album: "Fine Line",
//         date: "4 days ago",
//         time: "4:00",
//       },
//       {id:5,
//         product: {
//           productName: "Falling",
//           singer: "Justin ",
//           productImage: "banner.jpg",
//         },
//         album: "Fine Line",
//         date: "4 days ago",
//         time: "4:00",
//       },
//       {id:6,
//         product: {
//           productName: "Falling",
//           singer: "Harry Styles",
//           productImage: "banner.jpg",
//         },
//         album: "Fine Line",
//         date: "4 days ago",
//         time: "4:00",
//       },
//     ],
//     currentTrackIndex:null,
//     isPlaying:false,
//   });

//   function playTrack(index) {
//     if (index === songs.currentTrackIndex) {
//       togglePlay();
//     } else {
//       songs.audioPlayer.pause();
//       songs.audioPlayer = new Audio(songs.tracks[index].file);
//       songs.audioPlayer.play();
//       setSongs({ ...songs, currentTrackIndex: index, isPlaying: true });
//     }
//   }
//   function togglePlay() {
//     if (songs.isPlaying) {
//       songs.audioPlayer.pause();
//     } else {
//       songs.audioPlayer.play();
//     }
//     setSongs({ ...songs, isPlaying: !songs.isPlaying });
//   }

//   const [active, setActive] = useState({});

//   return (
//     <>
//       <SongContext.Provider value={{ songs,setSongs, active, setActive}}>
//         {props.children}
//       </SongContext.Provider>
//     </>
//   );
// };

// export default SongContextProvider;


import { createContext } from "react";

export const MusicContext = createContext();


