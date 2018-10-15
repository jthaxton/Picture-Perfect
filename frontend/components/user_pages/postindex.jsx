import React from 'react';
import {deletePicture} from '../../util/picture_api'

export default function PostIndex({posts}) {
  return (
    <ul>
      {posts.reverse().map(picture => {
        return (
          <li key={picture.id}>
            <h2>{picture.title}</h2>
            <img src={picture.photoUrl}/>
            <input type="submit" onClick={() => deletePicture(picture)}></input>
          </li>
        );
      })}
    </ul>
  );
}
