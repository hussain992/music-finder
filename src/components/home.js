import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackBox from "./artist";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";

// import SearchBar from 'material-ui-search-bar'
// import SearchBar from "material-ui-search-bar-enhanced";

const MainDiv = styled.div`
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(144, 190, 120, 1) 60%,
    rgba(253, 187, 45, 1) 100%
  );
  height: 100vh;
  /* padding: 30px 15px; */
`;
const SearchView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  justify-content: center;
`;

const SearchBar = styled.input`
  height: 40px;
  font-size: 24px;
  color: #307f30;
  border-radius: 25px;
  border: 2px solid #307f30;
  background-color: #ffcf39;
  width: 100%;
  padding: 0px 20px;
  :focus {
    outline-width: 0;
  }
`;

const TrackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding-top: 30px;
  max-height: 70vh;
  overflow-y: auto;
  margin-top: 20px;
  padding-left: 10px;
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 5px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #63bf97; 
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ffcf39; 
  }
`;
const Relative = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  height: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 40px;
`;
const SearchButton = styled.div`
  background-color: #307f30;
  position: absolute;
  right: 0px;
  width: 60px;
  height: 40px;
  top: 0px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  color: white;
  display: flex;
  font-weight: 700;
  cursor: pointer;
`;
const Title = styled.div`
  font-Size: 28px;
  color: #307f30;
  padding-left: 12%;
  padding-top: 15px;
`;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: ""
    };
  }
  getData = () => {
    axios
      .get(`https://itunes.apple.com/search?term=${this.state.searchTerm}`)
      .then(res => {
        console.log("resp ", res);
        this.setState({ result: res.data });
      });
  };
  handleChange = event => {
    console.log("enter handle change");
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    console.log("this.props", this.props);
    return (
      <MainDiv>
        <Title>Music Finder</Title>
        <SearchView>
          <Relative>
            <SearchBar
              type="input"
              placeholder="Search Songs, Artist"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <SearchButton onClick={this.getData}> Go </SearchButton>
          </Relative>
          <TrackList>
          {
            this.state.result != null && (
              <TrackBox data={this.state.result} />
            )
          }
           
          </TrackList>
        </SearchView>
      </MainDiv>
    );
  }
}
export default Home;
