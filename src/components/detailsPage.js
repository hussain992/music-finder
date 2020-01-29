import React, { Fragment } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
  /* background-color : #f66; */
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0px 15%;
  height: auto;
`;

const ImageDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

const InfoDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('data props', this.props);
    return (
      <MainDiv>
        <ImageDiv>
          hey 
        </ImageDiv>
        <InfoDiv>
          info
        </InfoDiv>
      </MainDiv>
    )
  }
}
export default DetailsPage;