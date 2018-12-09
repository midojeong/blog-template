import React, { Component } from 'react';
import styled from "styled-components";
import { Main, Sidebar } from "./components";

const centeredFlex = {
  display: "flex",
  alignItems:"center",
  justifyContent:"center",
};

const basicBorder = "1px solid rgba(22,27,72,0.2)"

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: 260px 1fr 1fr;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas: "Header Header Header"
                      "Sidebar Main Main"
                      "Sidebar Footer Footer";
`;

class Container extends React.Component {

  render(){
    return (
      <StyledContainer>
        {this.props.renderHeader()}
        {this.props.children}
        {this.props.renderFooter()}
      </StyledContainer>
    );
  }
}

class Header extends React.Component {

  render(){
    return (
    <StyledHeader>
        <div
        style={{gridArea: "Logo", ...centeredFlex, cursor: "pointer", borderRight: basicBorder}}
        onClick={this.props.handleClickLogo}>
        HOME
        </div>
        <div style={{gridArea: "Search"}}>
        <SearchBar onChange={this.props.handleChange} value={this.props.value} />
        </div>
        <div style={{gridArea: "Login"}}>
        login
        </div>
    </StyledHeader>
    );
  }
}



const StyledHeader = styled.div`
  grid-area: Header;
  display: grid;
  border-bottom: 1px solid rgba(22,27,72,0.2);
  grid-template-areas: "Logo Search Login";
  grid-template-columns: 260px 1fr 300px;
`;

const Footer = styled.div`
  grid-area: Footer;

`;

const SomeAlert = (msg) => () => {
  alert(msg);
};

const SearchBar = styled.input`
`;

class App extends Component {

  componentDidMount() {

  }

  state = {
    value: "default value",
  }

  handleChangeValue = (value) => this.setState({value});

  handleClickLogo = (e) => {
    alert("Logo Clicked");
  }

  handleChange = (e) => {
    this.setState({value : e.target.value});
  }
  
  render() {
    return (
      <Container
        renderHeader={()=> <Header value={this.state.value} handleClickLogo={this.handleClickLogo} handleChange={this.handleChange} />}
        renderFooter={()=> <Footer></Footer>}>
        <Main a="1" b="2" c={SomeAlert} changeValue={this.handleChangeValue} >
        </Main>
        <Sidebar sae="hun" hoo="chi" >
        </Sidebar>
      </Container>
    );
  }
}

export default App;
