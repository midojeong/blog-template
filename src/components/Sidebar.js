import React from "react";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  grid-area: Sidebar;
  border-right: 1px solid rgba(22,27,72,0.2);
`;

/*
<style>.sc-10290k{gridarea ...................}</style>
const SidebarWrapper = (props) => <div className="sc-1290uk" {...props}></div>  
*/


export const Sidebar = (props) => {
  return (
    <SidebarWrapper>
      this is sidebar
    </SidebarWrapper>
  );
};
