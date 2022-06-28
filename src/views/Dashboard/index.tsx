import styled from "@emotion/styled";
import React from "react";
import Banner from "../../components/Banner";
import Table from "../../components/Table";

const Dashboard = () => {
  return (
    <Root>
      <Banner/>
      <Table/>
    </Root>
  );
};

export default Dashboard;

const Root = styled.div`
  width: 100%;
`;