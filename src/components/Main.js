import React from "react";
import styled from "styled-components";
import {
  Route,
  BrowserRouter as Router
} from "react-router-dom";

export class Main extends React.Component {

  render(){
    const passThroughProps = this.props;
    
    return (
      <Router>  
        <>
          <Route path="/article/:id" render={(routeProps) => <Article {...passThroughProps} {...routeProps} />}/>
          <Route exact path="/" component={Index} />
        </>
      </Router>
    );
  }
}


const MainStyle = styled.div`
  grid-area: Main;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

class Article extends React.Component {

  handleBeforePage = () => {
    const { id } = this.props.match.params; 
    this.props.changeValue(`search at article #${id-1}`);
    this.props.history.push(`/article/${id-1}`);
  }

  handleNextPage = () => {
    const { id } = this.props.match.params; 
    this.props.changeValue(`search at article #${parseInt(id)+1}`);
    this.props.history.push(`/article/${parseInt(id)+1}`);
  }

  render(){
    const { id } = this.props.match.params; 
    return (
      <MainStyle>
        This page is {id}
        <Button onClick={this.handleBeforePage}>BEFORE PAGE</Button>
        <Button onClick={this.handleNextPage}>NEXT PAGE</Button>
      </MainStyle>
    );
  }
}

const Index = (props) => {

  const handleClick = (to) => () => {
    props.history.push(to);
  }
  
  return (
    <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
      Article List
      <Button style={{marginTop: "24px"}} onClick={handleClick("/article/0")}>
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

// transition: [css프로퍼티 종류 예를들어서 background, color, width, .... 다 퉁치면 all]  [시간] [이징함수(타이밍 함수)]


