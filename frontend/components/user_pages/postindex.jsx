import React from 'react';
import {deletePicture} from '../../util/picture_api'

export default function PostIndex({posts}) {

  return (
    <ul>
      {posts.reverse().map(picture => {
        debugger
        return (

          <li key={picture.id}>
            <h2>{picture.title}</h2>
            <h2>{picture.user.username}</h2>
            <img src={picture.photoUrl}/>
            <h2>{picture.body}</h2>
            <input id="delete-button" type="submit" onClick={() => deletePicture(picture.id)} value="Remove Post"></input>
          </li>
        );
      })}
    </ul>
  );
}
