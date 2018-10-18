import React from 'react';
import {deletePicture} from '../../util/picture_api';
import {createFollow} from '../../util/follow_api_util';
import {Link} from 'react-router-dom';
export default function PostIndex(state) {

  return (
    <ul>
      {state.posts.reverse().map(picture => {

        return (
          <div class="index-posts">
          <li key={picture.id}>
            <div class="user-index-posts">
            <img src="/userpic.png" id="user-pic"></img>
            <Link to={`/users/${picture.user_id}`}><h1 id="link-to-profile">user</h1></Link>
            {state.currentUser.id === picture.user_id ? <input id="sub-button" type="submit" onClick={() => deletePicture(picture.user)} value="Delete Post"></input> : <input id="sub-button" type="submit" onClick={() => createFollow(picture.user)} value="Follow User"></input>}
            </div>
            <h2>{picture.title}</h2>
            <img id="careful-pic" src={picture.photoUrl}/>
            <h2>{picture.body}</h2>
          </li>
          </div>
        );
      })}
    </ul>
  );
}

// {picture.userId ==  ? <input id="delete-button" type="submit" onClick={() => deletePicture(picture.id)} value="Remove Post"></input> : null}
