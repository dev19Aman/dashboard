import React from "react";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TableData from "./TableData";
const Table = () => {
  return (
    <Root>
    <Container>
      <div className=" ">
        <ImageContainer>
        <IconButton
           aria-label="delete"
           color="inherit"
           style={{
             color: "currentColor",
             borderRadius: "full",
             backgroundColor: "rgb(30,215,96)",
              width: "60px",
              height: "60px",
        }}
      >
        <PlayArrowRoundedIcon style={{ fontSize:"40px", color: "white" }} />
      </IconButton>
      <IconButton
        // onClick={handleToggle}
        aria-label="delete"
        color="inherit"
        style={{
          color: "currentColor",
          borderRadius: "full",
          width: "60px",
          height: "60px",
        }}
      >
        <FavoriteBorderRoundedIcon style={{ fontSize:"40px", color: "white" }} />
      </IconButton>
      <IconButton
        // onClick={handleToggle}
        aria-label="delete"
        color="inherit"
        style={{
          color: "currentColor",
          borderRadius: "full",
          width: "60px",
          height: "60px",
        }}
      >
        <MoreHorizOutlinedIcon style={{ fontSize:"40px", color: "white" }} />
      </IconButton>
        </ImageContainer>
        {/* Table Control */}
      </div>
    </Container>
    <TableContainer >
    <TableData />
       </TableContainer>
    </Root>

  );
};

export default Table;
const Root = styled.div`
  background-color: #2a3037;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
`;
const Container = styled.div`
  background-color: #2a3037;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-bottom: 1rem;
`;
const ImageContainer = styled.div`

  width: 16rem;
  height: 5rem;
  display: flex;
  gap: 10px;
`;

const TableContainer=styled.table`

`