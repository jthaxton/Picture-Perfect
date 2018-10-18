import React from 'react';
import {deletePicture} from '../../util/picture_api';
import {createFollow} from '../../util/follow_api_util';
import Splash from '../splash/splash'
import SplashContainer from '../splash/splash_container'
export default function Profile(state) {
  debugger
  return (

    <ul>
      <SplashContainer component={state.session}/>
      {state.posts.map(picture => {
        if (picture.user.id === state.currentUser.id) {
        return (

          <li key={picture.id}>
            <div class="profile-posts">
              <div class="user-info">
                <img src="/userpic.png" id="user-pic"></img>
                <input id="sub-button" type="submit" onClick={() => createFollow(picture.user)} value="Follow User"></input>
              </div>
            <h2>{picture.title}</h2>
            <img id="profile-feed" src={picture.photoUrl}/>
            <h2>{picture.body}</h2>
            {picture.user.id == Object.keys(state.currentUser.id) ? <input id="delete-button" type="submit" onClick={() => deletePicture(picture.id)} value="Remove Post"></input> : null}
            </div>
          </li>
        );
      }})}
    </ul>
  );

}
