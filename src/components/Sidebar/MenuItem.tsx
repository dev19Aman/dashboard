import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import * as metrics from "../../utils/uiMatrics";
import { AnimatePresence, motion } from "framer-motion";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
export default function Example({ item, color, active }: any) {
  const [showChild, setShowChild] = useState(false);

  const onClick = () => {
    if (item.child) {
      setShowChild((state) => !state);
    }
  };

  let childItems;

  if (item.child) {
    childItems = (
      <AnimatePresence initial={false}>
        <Childs
          variants={{
            visible: {
              height: "auto",
            },
            hidden: {
              height: 0,
            },
            exit: {
              height: 0,
            },
          }}
          initial="hidden"
          animate={showChild ? "visible" : "hidden"}
          exit="exit"
          transition={{
            duration: 0.4,
          }}
        >
          <ChildItems>
            {item.child.map((child: any, i: any) => {
              return (
                <Link
                  to={child.link}
                  key={i}
                  style={{ textDecoration: "none" }}
                >
                  <ChildItem style={{ background: i === 1 ? "" : "" }}>
                    <Icon>
                      <ChevronRightIcon fontSize="small" />
                    </Icon>
                    {child.label}
                  </ChildItem>
                </Link>
              );
            })}
          </ChildItems>
        </Childs>
      </AnimatePresence>
    );
  } else {
    childItems = null;
  }

  return (
    <>
      <Outer className={color ? "active" : ""}>
        {!item.child ? (
          <Link to="">
            <Root onClick={onClick}>
              <Icon>{item.icon}</Icon>
              <Label style={{ color: item.child ? "white" : "  " }}>
                {item.label}
              </Label>
            </Root>
          </Link>
        ) : (
          <Root
            onClick={onClick}
            style={{
              backgroundColor: showChild ? "#cacbf5" : "",
            }}
          >
            <Icon style={{ color: showChild ? "#696CFF" : "" }}>
              {item.icon}
            </Icon>
            <Label style={{ color: showChild ? "#696CFF" : "" }}>
              {item.label}
            </Label>
          
          </Root>
        )}
        {childItems}
      </Outer>
    </>
  );
}

const Outer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;

  /* &.active {
    background-color: ${(props: any) => props.theme.primary};
  }

  & a {
    color: currentColor;
  }

  &:not(.active):hover {
    background-color: rgba(255, 255, 255, 0.04);
  } */
`;

const Root = styled.div`
  width: 100%;
  padding: 0.2em;
  font-size: 1.4em;
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
  margin-bottom: 0.4rem;
  color: #697a8d;
  font-size: 30px;
`;
const SecondIcon = styled.div`
  margin-left: 15em;
`;
const Label = styled.div`
  position: absolute;
  left: 3.5em;
  font-weight: 400;
  color: #697a8d;
  font-size: 17px;
`;

const Childs = styled(motion.div)`
  text-decoration: none;
`;

const ChildItems = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  overflow: hidden;
  margin: 0em 1em;
  grid-gap: 0px;
  text-decoration: none;
`;
const ChildItem = styled.div`
  text-align: left;
  display: flex;
  padding: 0.2em;
  align-items: center;
  font-size: 1.4em;
  border-radius: 8px;
  font-weight: 700;
  color: #697a8d;
  cursor: pointer;
  &:not(.active):hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;
