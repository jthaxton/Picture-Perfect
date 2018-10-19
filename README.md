# Picture Perfect

[LiveDemo](https://mypictureperfect.herokuapp.com/#/)

Picture Perfect is a photo blogging application, modeled after 500px, that was built to inspire a user's "inner photographer". It uses a Rails/PostgrSQL backend with a React.js and Redux frontend. For photo storage and upload capability, I chose to use AWS S3. Although the basic functionalities of this application were built in less than two weeks, I plan on refactoring and adding new features in the future.

## Features
* Secure frontend to backend user authentication using BCrypt.
* Users can publish photos and a short text to provide context to the photos.
* Users have a feed of photos after login.
* Every user has a profile containing an index of only their photos.
* When logged in, users may click on other usernames to be redirected to other profiles.
* Users may delete their own posts.

## Possible future features
  In the future I would like to add:
  * Edit posts
  * User avatars
  * Search
