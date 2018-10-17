import React from 'react';
import {deletePicture} from '../../util/picture_api';
import {createFollow} from '../../util/follow_api_util';
import {Link} from 'react-router-dom';
export default function PostIndex({posts}) {

  return (
    <ul>
      {posts.reverse().map(picture => {

        return (
          <div class="index-posts">
          <li key={picture.id}>
            <div class="user-index-posts">
            <img src="/userpic.png" id="user-pic"></img>
            <h1>{picture.user.username}</h1>
            <input id="sub-button" type="submit" onClick={() => createFollow(picture.user)} value="Follow User"></input>

            </div>
            <h2>{picture.title}</h2>
            <img id="careful-pic" src={picture.photoUrl}/>
            <h2>{picture.body}</h2>
            {picture.user.id == Object.keys(getState.entities.users)[0] ? <input id="delete-button" type="submit" onClick={() => deletePicture(picture.id)} value="Remove Post"></input> : null}
          </li>
          </div>
        );
      })}
    </ul>
  );
}
