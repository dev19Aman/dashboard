import styled from "@emotion/styled";
import React, { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Table from "../../components/Table";
// import firstSong from "../../../public/Songs/first.mp3";
import { MusicContext } from "../../Context/songContext";
const Dashboard = () => {
  var first   = require('../../Songs/first.mp3');
  var second   = require('../../Songs/second.mp3');
  var third   = require('../../Songs/third.mp3');
  
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks:
    [
      { id: "1", src: "banner.jpg", title: 'demo1', name: " Name1", dateAdded: "5 days ago", time: "4:00",file:first},
      { id: "2", src: "banner.jpg", title: 'demo2', name: " Name2", dateAdded: "5 days ago",  time: "4:00", file:second},
      { id: "3", src: "banner.jpg", title: 'demo3', name: " Name3", dateAdded: "5 days ago",  time: "4:00" ,file:third},
      { id: "4", src: "banner.jpg", title: 'demo4', name: " Name4", dateAdded: "5 days ago",  time: "4:00",file:first},
      { id: "5", src: "banner.jpg", title: 'demo5', name: " Name5", dateAdded: "5 days ago",  time: "4:00",file:second},
      { id: "6", src: "banner.jpg", title: 'demo6', name: " Name6", dateAdded: "5 days ago",  time: "4:00",file:third},
      { id: "7", src: "banner.jpg", title: 'demo7', name: " Name7", dateAdded: "5 days ago",  time: "4:00" },
      { id: "8", src: "banner.jpg", title: 'demo8', name: " Name8", dateAdded: "5 days ago",  time: "4:00" },
      { id: "9", src: "banner.jpg", title: 'demo9', name: " Name9", dateAdded: "5 days ago",  time: "4:00" },
      { id: "9", src: "banner.jpg", title: 'demo9', name: " Name9", dateAdded: "5 days ago",  time: "4:00" },
     
    ],
    currentTrackIndex:null,
    isPlaying:false,
  });
  // console.log("dashboard",active);
  
  return (
    <Root>
    <MusicContext.Provider value={[state, setState]}>
      <Banner/>
      <Table />
    <Footer />
    </MusicContext.Provider>
    </Root>
  );
};

export default Dashboard;

const Root = styled.div`
  width: 100%;
`;