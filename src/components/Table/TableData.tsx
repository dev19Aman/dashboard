import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { log } from "console";
import useMusicPlayer from "../../hooks/useSongPlayer";

const TableData = ({setActive}:any) => {
  // const {songs,setSongs,active,setActive} = useContext(SongContext)
  const music = useMusicPlayer();



  return (
    <Root>
      <table className="w-full">
        <thead className="bg-tabletheme border-b border-gray-600 text-left sticky top-0 ">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-gray-300 px-8 py-2 text-left "
            >
              # Title
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-300 px-14 py-2 text-left"
            >
              ALBUM
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-300 px-14 py-2 text-left"
            >
              DATE ADDED
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-gray-300 px-8 py-2  text-right"
            >
              <AccessTimeOutlinedIcon
                style={{ fontSize: "20px", color: "gray" }}
              />
            </th>
          </tr>
        </thead>

          <tbody  className=""
          style={{marginTop:"100px"}}>
          {music.trackList.map((track:any,index:any) => (
            
            <tr className="checkCLass bg-transparent  rounded-xl hover:bg-gray-600 cursor-auto" onDoubleClick={() => music.playTrack(index,track)}
            key={track.id}
           >
              <td className="px-10 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                <Profile>
                  {/* <span className="text-white childClass" > */}
                  {music.isPlaying && music.currentTrackIndex === index ? (
                  <span className="text-white " >
                    <PlayArrowRoundedIcon
                    style={{ fontSize: "20px", color: "white"}}
                  />
                  </span>
                    ) : (
                      <span className="text-white childClass">
                      {track.id}
                      </span>
                    )}
                  <ImageContainer>
                    <img src={track.src} className="" />
                  </ImageContainer>
                  <Info>
                    <Title>{track.title}</Title>
                    <Pre className="hover:underline">
                      {track.name}
                    </Pre>
                  </Info>
                </Profile>
              </td>
              <td className="text-base text-gray-300 font-light px-14 py-4 whitespace-nowrap text-left ">
                {track.name}
              </td>
              <td className="text-base text-gray-300 font-light px-14 py-4 whitespace-nowrap text-left">
                {track.dateAdded}
              </td>
              <td className="text-base text-gray-300 font-light  px-8 py-4 whitespace-nowrap text-right  flex justify-end">
                <div className="flex gap-6 ">
                  <Title style={{ color: "white" }}>{track.time}</Title>
                </div>
              </td>
            </tr>
        ))}
          </tbody>
      </table>
    </Root>
  );
};

export default TableData;

const Root = styled.div`
  width: 84vw;
  .childClass {
    opacity: 0;
  }
  .checkCLass:hover .childClass {
    opacity: 1;
  }
`;
const Profile = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
`;
const Info = styled.image`
  color: gray;
`;
const Pre = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: gray;
`;

const ImageContainer = styled.div`
  background-color: #c6c3c3;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
`;
const Title = styled.h2`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

