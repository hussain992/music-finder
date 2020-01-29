import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Link } from "react-router-dom";
import DetailsPage from './detailsPage';

const Box = styled.div`
 
  box-shadow: 0px 0px 6px 2px #9ba22e;
  /* border: 1px solid #0f0; */
  border-radius: 3px;
  /* display: inline-flex; */
  width: 18%;
  margin: 0px 15px 15px 0px;
`;
const ArtistName = styled.div`
   padding: 5px 10px;
`;
const AlbumImage = styled.img`
  width: 100%;
  height: 100px;
`;
class Artist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        {
          this.props.data !=null ?this.props.data.map(d => {
            return(
              
                <Link 
                  to={{
                    pathname: '/detailsPage',
                    state: {
                      asv: "hey"
                    }
                  }}>
                    <Box>
                  <AlbumImage src={d.artworkUrl100} />
                  <ArtistName>{d.artistName}</ArtistName>
                  </Box>
                </Link>
             
            )
          })
          :null
        }
      </Fragment>
     
      // <div />
    )
  }
}
export default Artist

// https://music.apple.com/us/artist/cody-jinks/363412711?uo=4"
// https://music.apple.com/us/artist/cody-jinks/363412711?ign-mpt=uo%3D4