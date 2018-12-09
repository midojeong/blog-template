import React, { Component } from 'react';
import styled from "styled-components";
import { Main, Sidebar } from "./components";

const centeredFlex = {
  display: "flex",
  alignItems:"center",
  justifyContent:"center",
};

const basicBorder = "1px solid rgba(22,27,72,0.2)"

const Container = styled.div`
  display: grid;
  width: 100%;
  min-height: 100vh;
  grid-template-columns: 260px 1fr 1fr;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas: "Header Header Header"
                      "Sidebar Main Main"
                      "Sidebar Footer Footer";
`;

const Header = styled.div`
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

  handleClickLogo = (e) => {
    alert("Logo Clicked");
  }

  handleChange = (e) => {
    this.setState({value : e.target.value});
  }
  
  render() {
    return (
      <Container>
        <Header>
          <div
            style={{gridArea: "Logo", ...centeredFlex, cursor: "pointer", borderRight: basicBorder}}
            onClick={this.handleClickLogo}>
            logo
          </div>
          <div style={{gridArea: "Search"}}>
            <SearchBar onChange={this.handleChange} value={this.state.value} />
          </div>
          <div style={{gridArea: "Login"}}>
            login
          </div>
        </Header>
        <Main a="1" b="2" c={SomeAlert}>
        </Main>
        <Sidebar sae="hun" hoo="chi">
        </Sidebar>
        <Footer>
        </Footer>
      </Container>
    );
  }
}

export default App;
