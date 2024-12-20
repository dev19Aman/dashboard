import styled from "@emotion/styled";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import Slider from "@mui/material/Slider";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import MicIcon from "@mui/icons-material/Mic";
import ListIcon from "@mui/icons-material/List";
import IconButton from "@mui/material/IconButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { useContext, useEffect, useState } from "react";
import useMusicPlayer from "../../hooks/useSongPlayer";
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const Footer = () => {
  // const [title, setTitle] = useState("");
  // const [name, setName] = useState("");
  const music = useMusicPlayer()
  return (
    <div
      className="bg-black
    text-3xl text-white text-center
    fixed
    inset-x-0
    bottom-0
    "
    >
      <Root>
        <Profile>
          <ImageContainer>
            <img src="banner.jpg" className="" />
          </ImageContainer>
          <Info>
            <Title>{music?music.currentTrackTitle:"play"}</Title>
            <Pre className="hover:underline ">{music?music.currentTrackName:"play"}</Pre>
          </Info>
          <div className="flex gap-4 pl-5">
            <FavoriteBorderRoundedIcon
              style={{ fontSize: "20px", color: "white" }}
            />
            <PhotoSizeSelectActualOutlinedIcon
              style={{ fontSize: "20px", color: "white" }}
            />
          </div>
        </Profile>

        <div className="flex flex-col gap-2">
          <div className="flex gap-10 items-center h-5">
            <div className="text-grey-darker">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
              </svg>
            </div>
            <div className="text-grey-darker">
            <IconButton
                // onClick={handleToggle}
                aria-label="delete"
                color="inherit"
                style={{
                  color: "currentColor",
                  width: "20px",
                  height: "20px",
                  marginBottom: "5px",
                 
                }}
              >
                <button  onClick={music.playPreviousTrack}>
                <SkipPreviousIcon
                  style={{ fontSize: "20px", color: "white" }}
                  />
                  </button>
              </IconButton>
            </div>
            <div className="text-white p-8 rounded-full bg-red-light shadow-lg">
              <IconButton
                // onClick={handleToggle}
                aria-label="delete"
                color="inherit"
                style={{
                  color: "currentColor",
                  borderRadius: "full",
                  backgroundColor: "rgb(30,215,96)",
                  width: "20px",
                  height: "20px",
                  marginBottom: "5px",
                }}
              >
                  <button
            className="button has-text-light has-background-grey-dark"
            onClick={music.togglePlay}
          >
            {music.isPlaying ? (
               <PauseIcon
               style={{ fontSize: "15px", color: "white",marginBottom:"5px" }}
             />
            ) : (
              <PlayArrowRoundedIcon
                  style={{ fontSize: "15px", color: "white",marginBottom:"5px" }}
                />
            )}
          </button>
                
              </IconButton>
            </div>
            <div className="text-grey-darker">
            <IconButton
                // onClick={handleToggle}
                aria-label="delete"
                color="inherit"
                style={{
                  color: "currentColor",
                  width: "20px",
                  height: "20px",
                  marginBottom: "5px",
                 
                }}
              >
                <button  onClick={music.playNextTrack}>
                <SkipNextIcon
                  style={{ fontSize: "20px", color: "white" }}
                  />
                  </button>
              </IconButton>
            </div>
            <div className="text-grey-darker">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
              </svg>
            </div>
          </div>
          <div className="w-96 bg-gray-600 h-1">
            <div className="bg-white h-1" style={{ width: "45%" }}></div>
          </div>
        </div>

        <Sign>
          <MicIcon style={{ fontSize: "20px", color: "white" }} />
          <ListIcon style={{ fontSize: "20px", color: "white" }} />
          <VolumeUpIcon style={{ fontSize: "20px", color: "white" }} />
          <div className="w-20">
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </div>
        </Sign>
      </Root>
    </div>
  );
};

export default Footer;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  align-items: center;
  background: #181818;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Sign = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: #a7a6a6;
  padding-right: 3rem;
`;
const Title = styled.h2`
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  height: 20px;
`;
const Pre = styled.span`
  font-size: 14px;
  color: white;
  margin-bottom: 4px;
`;

const Profile = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 2rem;
  align-items: center;
`;
const ImageContainer = styled.div`
  background-color: #c6c3c3;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
