import React from 'react';
import styled from 'styled-components';
import { Post } from '../../storybook_components/post';
import InfiniteScroll from "react-infinite-scroll-component";

const StyledPostIndex = styled.div`
  display: block;
  max-width: 80%;
`;

export class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.store = {};
    this.state = {
      offset: 1,
    };
    this.fetchPictures = this.fetchPictures.bind(this);
  }

  componentDidMount() {
    this.props.fetchPicturesOffset(1);
  }

  fetchPictures() {
    this.setState({offset: this.state.offset + 1});
    this.props.fetchPicturesOffset(this.state.offset);
  }
  render() {
    return (
      <StyledPostIndex>
                  <InfiniteScroll
          dataLength={this.props.pictures && this.props.pictures.followed_pictures && this.props.pictures.followed_pictures.length || 1}
          next={this.fetchPictures}
          hasMore={this.props.pictures && this.props.pictures.next}
          loader={<h4>Loading...</h4>}
          height={this.props.size * 0.8}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        {this.props.pictures && this.props.pictures.followed_pictures && this.props.pictures.followed_pictures.map((picture) => (
          <Post owner={picture.owner}
            picture={picture} 
            submit={this.props.createComment}
            updateProfPic={this.props.updateProfPic}
            deletePicture={this.props.deletePicture}
            currentUserId={this.props.currentUserId}
            makeFollow={this.props.makeFollow}
            deleteFollow={this.props.deleteFollow}
              />
        ))}
        </InfiniteScroll>
        {!(this.props.pictures && this.props.pictures.followed_pictures) && (<div>No photos... yet! Upload photos and follow other pages!</div>) }
      </StyledPostIndex>
    );
  }
}
