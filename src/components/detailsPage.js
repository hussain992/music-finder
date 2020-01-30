import React, { Fragment } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {format, parseISO} from 'date-fns';

const MainDiv = styled.div`

    display: flex;
    flex-direction: row;
    margin: 30px auto;
    height: auto;
    width: 60%;
    padding: 30px;
    border: 1px solid #ddd;
    border-radius: 5px;
    min-height: 200px;

`;

const ImageDiv = styled.div`
  display: flex;
  padding-right: 30px;
  /* border: 1px solid #eee; */

  /* justify-content: center; */
`;

const InfoDiv = styled.div`
  display: flex;

  /* justify-content: center; */
  flex-direction: column;
`;

const CollectionName = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 15px;
`;

const Artist = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #777;
  padding-bottom: 10px;
`;

const Small = styled.div`
  font-size: 12px;
  padding: 5px 0px;
  color: #777;

`;
class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songDetails: null,
    };
  }
  componentDidMount = () => {
    this.setState( {
      songDetails : this.props.location.data,
    })
  }
  render() {
    console.log('data props', this.props.location.data);
    const {artworkUrl100, collectionName, artistName, trackPrice, currency,
      previewUrl, primaryGenreName, releaseDate
    } =this.props.location.data;
    let date = format(parseISO(releaseDate), "dd-MM-yyyy")
    return (
      <MainDiv>
        {this.props.location.data != undefined ? (
          <Fragment>
          <ImageDiv>
            <video width="300" height="200" controls>
                <source src={previewUrl} type="video/mp4" />
            </video>
          </ImageDiv>
          <InfoDiv>
          <CollectionName>{collectionName}</CollectionName>
          <Artist>{artistName}</Artist>
          
          <Small>Price :{trackPrice} {currency}</Small>
          <Small>PrimaryGenrE :{primaryGenreName}</Small>
        <Small>ReleaseDate :{date}</Small>
          </InfoDiv>
          </Fragment>
        )
        : <div>No data Found</div>
      }
      </MainDiv>
    )
  }
}
export default withRouter(DetailsPage);