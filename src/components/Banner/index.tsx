import React from "react";
import styled from "@emotion/styled";

const Banner = () => {
  return (
    <Container>
      <div className="flex gap-7 ">
        <ImageContainer>
          <img src="banner.jpg" className="w-96 shadow-lg rounded-lg" style={{height:"240px"}}/>
        </ImageContainer>
        <div className="">
          <div className="flex flex-col mt-10">
            <p className="text-white leading-none uppercase">Playlist</p>
            <Heading >Alone Again</Heading>
            <p className="text-gray-300 font-bold">Being alone (again) can be tough, but these songs will keep you company.</p>
            <p className="text-gray-300 font-bold"><span className="text-white font-bold">Spotify.</span>3,086,200 likes 150 songs, about 8 hr 30 min</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.div`
  background: linear-gradient(to bottom, #72889c, #536170, #556475, #424e5a);
  padding-top: 1rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
`;
const ImageContainer = styled.div`
  width: 16rem;
  height: 16rem;
`;

const Heading=styled.h1`
    font-size: 90px;
    font-weight: bold;
    color: white;
`