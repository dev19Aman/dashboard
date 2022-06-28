import styled from "@emotion/styled";
import React from "react";
import { appbarHeight } from "../../utils/uiMatrics";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Badge, Box } from "@mui/material";
import { AccountCircle, Search } from "@mui/icons-material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FlagIcon from "@mui/icons-material/Flag";
const Appbar = ({ handleToggle }: any) => {
  return (
    <Root>
      <IconButton
        // onClick={handleToggle}
        aria-label="delete"
        color="inherit"
        style={{
          color: "currentColor",
          marginLeft: "1rem",
          borderRadius: "full",
          backgroundColor: "rgb(35,42,48)",
          width: "30px",
          height: "30px",
        }}
      >
        <ArrowBackIosIcon style={{ marginLeft: "5px", color: "white" }} />
      </IconButton>
      <IconButton
        // onClick={handleToggle}
        aria-label="delete"
        color="inherit"
        style={{
          color: "currentColor",
          marginLeft: "1rem",
          borderRadius: "full",
          backgroundColor: "rgb(35,42,48)",
          width: "30px",
          height: "30px",
        }}
      >
        <ArrowForwardIosIcon style={{ marginLeft: "5px", color: "white" }} />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
            marginRight: "10px",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
         <button className=" text-gray-400 font-bold py-1 px-3 rounded-full h-12">
            Premium
          </button>
          <button className=" text-gray-400 font-bold py-1 px-3 rounded-full h-12">
            Support
          </button>
          <button className=" text-gray-400 font-bold py-1 px-3 rounded-full h-12">
            Download
          </button>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
         
          <span className=" text-gray-400 font-bold  rounded-full h-12 w-0">
            |
          </span>
        </IconButton>
        <button className=" text-gray-400 font-bold py-1 px-8 rounded-full h-12">
          Sign up
        </button>
        <button className="bg-white hover:bg-gray-100 text-black font-bold py-1 px-8 rounded-full h-12">
          Log in
        </button>
      </Box>
    </Root>
  );
};

export default Appbar;

/* background-color: ${(props) => darken(0.02, props.theme.frame)}; */
const Root = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: ${appbarHeight}px;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: rgb(62, 73, 84);
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  & .logout {
    color: #fff;
    margin-right: 2rem;
  }
`;

const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  padding-left: 35px;
  margin: 10px;
  background: transparent;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: gray;
  }
`;
const ImageContainer = styled.div`
  border-radius: 100px;
  background-color: #d6d7f9;
  width: 42px;
  height: 42px;
`;

interface containerProps {
  icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png";
}
