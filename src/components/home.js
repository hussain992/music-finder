import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackBox from "./artist";
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
  height: 100%;
  padding: 30px 15px;
`;
const SearchView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
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
    axios.get(`https://itunes.apple.com/search?term=${this.state.searchTerm}`).then(res => {
      console.log("resp ", res);
      this.setState({ result: res.data.results });
    });
  };
  handleChange = event => {
    console.log('enter handle change')
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <MainDiv>
        <SearchView>
          <Relative>
            <SearchBar
              type="input"
              placeholder="Search Songs, Artist"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <SearchButton onClick={this.getData}> go </SearchButton>
          </Relative>
          <TrackList>
            <TrackBox data={this.state.result} />
          </TrackList>
        </SearchView>
      </MainDiv>
    );
  }
}
export default Home;
