import React from 'react';
import {createFollow} from '../../util/follow_api_util';
import {Link} from 'react-router-dom';
export default function PostIndex(state) {


  return (
    <div>
      {state.posts.reverse().map(picture => {

        return (
          <div class="index-posts">
          <div id="indexitem" key={picture.id}>
            <div class="user-index-posts">
            <img src="/userpic.png" id="user-pic"></img>
            <Link to={`/users/${picture.user_id}`} username={picture.user.username} follows={state.follows}><h1 id="link-to-profile">{picture.user.username}</h1></Link>
            {state.currentUser.id === picture.user_id ? <input id="sub-button" type="submit" onClick={() => state.deletePicture(picture.id)} value="Delete Post"></input> : <input id="sub-button" type="submit" onClick={() => state.follow(picture.user)} value="Follow User"></input>}
            </div>
            <h2>{picture.title}</h2>
            <img id="careful-pic" src={picture.photoUrl}/>
            <h2 id="bodypost">{picture.body}</h2>
          </div>
          </div>
        );
      })}
    </div>
  );
}
