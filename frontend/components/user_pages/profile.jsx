import React from 'react';
import {deletePicture} from '../../util/picture_api';
import {createFollow} from '../../util/follow_api_util';
export default function Profile({posts, currentUser}) {

  return (

    <ul>
      {posts.map(picture => {
        if (picture.user.id === currentUser.id) {
        return (

          <li key={picture.id}>
            <div class="profile-posts">
              <div class="user-info">
                <img src="/userpic.png" id="user-pic"></img>
                <h2>{picture.user.username}</h2>
                <input id="sub-button" type="submit" onClick={() => createFollow(picture.user)} value="Follow User"></input>
              </div>
            <h2>{picture.title}</h2>
            <img src={picture.photoUrl}/>
            <h2>{picture.body}</h2>
            {picture.user.id == Object.keys(getState.entities.users)[0] ? <input id="delete-button" type="submit" onClick={() => deletePicture(picture.id)} value="Remove Post"></input> : null}
            </div>
          </li>
        );
      }})}
    </ul>
  );

}
