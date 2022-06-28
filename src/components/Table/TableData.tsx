import React, { useState } from "react";
import styled from "@emotion/styled";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const TableData = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
    console.log("working");
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <Root>
      <table className="w-full" style={{ width: "100%" }}>
        <thead className="bg-transparent border-b border-gray-600 text-left">
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
        {/* {data.map((data: any) => ( */}
        <tbody>
          <tr
            className="bg-transparent  transition duration-300 ease-in-out hover:bg-gray-600  cursor-auto"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <td className="px-10 py-2 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
              <Profile>
                <span className="text-white">
                  {isHovering ? (
                    <PlayArrowRoundedIcon
                      style={{ fontSize: "20px", color: "white" }}
                    />
                  ) : (
                    1
                  )}
                </span>
                <ImageContainer>
                  <img src="banner.jpg" className="" />
                </ImageContainer>
                <Info>
                  <Title>Failing</Title>
                  <Pre className="hover:underline ">Harry Styles</Pre>
                </Info>
              </Profile>
            </td>
            <td className="text-base text-gray-300 font-light px-14 py-4 whitespace-nowrap text-left ">
              Fine Line
            </td>
            <td className="text-base text-gray-300 font-light px-14 py-4 whitespace-nowrap text-left">
              4 Days Ago
            </td>
            <td className="text-base text-gray-300 font-light  px-8 py-4 whitespace-nowrap text-right  flex justify-end">
              <div className="flex gap-6 ">
                {isHovering ? (
                  <FavoriteBorderRoundedIcon
                    style={{ fontSize: "20px", color: "gray" }}
                  />
                ) : (
                  ""
                )}

                <Title style={{ color: "white" }}>4:00</Title>
                {isHovering ? (
                  <MoreHorizOutlinedIcon
                    style={{ fontSize: "20px", color: "gray" }}
                  />
                ) : (
                  ""
                )}
              </div>
            </td>
          </tr>
       
        </tbody>
      </table>
    </Root>
  );
};

export default TableData;

const Root = styled.div`
  width: 80vw;
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

/* ${props=>props.} */
const ActionButton = styled.button`
  margin-top: 9px;
  padding: 0px 10px;
  background: #c1c2ff;
  height: 24px;
  border-radius: 7px;
  box-shadow: 20px;
  color: #696cff;
  cursor: pointer;
  outline: 0;
  font-weight: 700;
  :hover {
    opacity: 0.8;
  }
`;
