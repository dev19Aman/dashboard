import styled from "@emotion/styled";
import React, { useState } from "react";
import * as metrics from "../../utils/uiMatrics";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from '@mui/icons-material/Search';
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SingleItems from "./SingleItems";
import { Link } from "react-router-dom";
const Sidebar = ({ collapse, ...props }: any) => {
  const [active, setActive] = useState(false);
  return (
    <Root {...props} className={collapse ? "collapse" : ""}>
      <Link to="/">
        <Header>
          <h1 className="text-2xl z-0 text-white font-bold">Spotify</h1>  
        </Header>
      </Link>
      <MenuItems>
        {links.map((item, i) => (
          <MenuItem
            item={item}
            color={i === 0 ? "red" : ""}
            key={item.label}
            active={active}
          />
        ))}
      </MenuItems>
      {/*SINGLE ITEMS  */}

    </Root>
  );
};

export default Sidebar;

/* background-color: ${(props) => props.theme.frame}; */
const Root = styled(motion.div)`
  height: 100vh;
  width: ${metrics.sidebarWidth.full}px;
  background-color: rgb(0,0,0);
  backdrop-filter: blur(10px);
  left: 0;
  top: 0;
  font-size: 10px;
  transition: ${metrics.sidebarWidth.transition()};
  &.collapse:hover {
    width: ${metrics.sidebarWidth.full}px;
  }
  &.collapse {
    width: ${metrics.sidebarWidth.small}px;
  }
`;
const Header = styled.div`
  padding-top: 2rem;
 padding-left: 1.2rem;
  padding-bottom: 2rem;
  width: 100%;
 


  img {
    font-size: 3em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const MenuItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 0.5em;
  padding: 0.5em; */
  text-decoration: none;
`;

const links = [
  {
    label: "Home",
    link: "/",
    icon: <HomeOutlinedIcon />,
    // child: [
    //   { label: "Analytics", link: "/analytice" },
    //   { label: "eCommerce", link: "/ecommerce" },
    // ],
  },
  {
    label: "Search",
    link: "/layout",
    icon: <SearchIcon />,
    // child: [
    //   { label: "Analytics", link: "/analytice" },
    //   { label: "eCommerce", link: "/ecommerce" },
    // ],
  },
];
