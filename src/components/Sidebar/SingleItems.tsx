import styled from "@emotion/styled";
import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
const SingleItems = () => {
  const [showChild, setShowChild] = useState();

  const onClick = (index: any) => {
    setShowChild(index);
  };
  return (
    <>
      <Text>APP & PAGES</Text>
      <Root
        style={{
          backgroundColor: showChild ? "" : "",
        }}
      >
        <Icon style={{ color: showChild ? "white" : "" }}>
          <EmailOutlinedIcon />
        </Icon>
        <Label style={{ color: showChild ? "white" : "" }}>Email</Label>
      </Root>
      <Root
        style={{
          backgroundColor: showChild ? "" : "",
        }}
      >
        <Icon style={{ color: showChild ? "white" : "" }}>
          <ChatBubbleOutlineOutlinedIcon />
        </Icon>
        <Label style={{ color: showChild ? "white" : "" }}>Chat</Label>
      </Root>
      <Root
        style={{
          backgroundColor: showChild ? "" : "",
        }}
      >
        <Icon style={{ color: showChild ? "white" : "" }}>
          <PlaylistAddCheckOutlinedIcon />
        </Icon>
        <Label style={{ color: showChild ? "white" : "" }}>Todo</Label>
      </Root>
    </>
  );
};

export default SingleItems;

const Root = styled.div`
  width: 100%;
  padding: 1px;
  font-size: 0.5em;
  border-radius: 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  &.active {
    background-color: #cacbf5;
  }
`;

const Icon = styled.div`
  margin-right: 0em;
  margin-left: 0.8rem;
  color: #697a8d;
  font-size: 30px;
`;

const Label = styled.div`
  position: absolute;
  left: 3.5em;
  font-weight: 400;
  color: #697a8d;
  font-size: 17px;
`;
const Text = styled.div`
  color: #697a8d;
  font-size: 14px;
  font-weight: bold;
  margin-left: 14px;
  margin-top: 20px;
  margin-bottom: 14px;
`;
