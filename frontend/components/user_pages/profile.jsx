import React from 'react';
import {deletePicture} from '../../util/picture_api';
import {createFollow} from '../../util/follow_api_util';
import Splash from '../splash/splash'
import SplashContainer from '../splash/splash_container'
export default function Profile(state) {

  return (

    <div>
      <SplashContainer component={state.session}/>
        <img src="/userpic.png" id="user-pic"></img>
  
      {state.posts.map(picture => {
        if (picture.user.id === state.currentUser.id) {
        return (

          <div key={picture.id} id="selfprofilefeed">
            <div class="profile-posts">
              <div class="user-info">
              </div>
            <div>
            <img id="profile-feed" src={picture.photoUrl}/>
            {picture.user.id == Object.keys(state.currentUser.id) ? <input id="delete-button" type="submit" onClick={() => deletePicture(picture.id)} value="Remove Post"></input> : null}
            </div>

            </div>
          </div>
        );
      }})}
    </div>
  );

}
