import React from "react";
import styled from "styled-components";
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";

export class Main extends React.Component {

  render(){
    return (
      <Router>  
        <>
          <Route path="/article/:id" render={(routeProps) => <Article {...this.props} {...routeProps} />}/>
          <Route exact path="/" component={Index} />
        </>
      </Router>
    );
  }
}

const MainStyle = styled.div`
  grid-area: Main;
`;

class Article extends React.Component {

  render(){
    const { id } = this.props.match.params; 
    console.log(id);
    return (
      <MainStyle>
        this is main
      </MainStyle>
    );
  }
}

const Index = (props) => {
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
      Article List
      <Button style={{marginTop: "24px"}}>
        goto article
      </Button>
    </div>
  );
};


const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border-radius: 24px;
  padding: 0 16px 0 16px;
  cursor: pointer;
  border: 1px solid rgba(22,27,72,0.1);
  :hover {
    box-shadow: 0 0 16px 0 rgba(22,27,72,0.3);
  }
  transition: all 0.15s ease-out;
`;

