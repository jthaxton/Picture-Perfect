import React from 'react';
import {Link} from 'react-router-dom';
import CommentForm from './comment_form';
import CommentIndex from './comment_index';
import { withRouter } from 'react-router-dom';

class PostIndex extends React.Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      comment: '',
      picture_id: ''
    };
    this.listFollows.bind(this);
    this.store = {};
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('comment[comment]', this.state.comment);
    formData.append('comment[user_id]', this.props.currentUser.id);
    formData.append('comment[picture_id]', this.state.picture_id);
    $.ajax({
      url: '/api/comments',
      data: formData,
      method: 'POST',
      contentType: false,
      processData: false
  }
); this.props.history.push('/');
}

  componentWillUpdate() {
    this.listFollows();
  }

  listFollows() {

  }



  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleInput(e) {
    this.setState({ comment: e.currentTarget.value });
  }

  componentDidMount() {
    this.props.fetchposts();
    // this.props.fetchUsers();
  }

  render() {
    
    let that;
  return (
    <div>
      {this.props.posts.reverse().map(picture => {
        that = this;
        
        
        return <div key={picture.id} className="index-posts" data-infinite-scroll='{ "path": ".pagination__next", "append": ".infpost", "history": false }'>
            <div className="infpost">
              <div className="user-index-posts">
                <div id="user-post-info">
                  <div id="infos">
                  {picture.user.id === that.props.currentUser.id && that.props.pics[that.props.currentUser.prof_pic_id] ? <img src={that.props.pics[that.props.currentUser.prof_pic_id].photoUrl} id="user-pic"/> : picture.user.prof_pic_id !== null ? <img src={that.props.pics[picture.user.prof_pic_id].photoUrl} id="user-pic" /> : <img src= "/userpic.png" id="user-pic" />}
                    <Link to={`/users/${picture.user_id}`} username={picture.user.username} follows={this.props.follows}>
                      <h1 id="link-to-profile">
                        {picture.user.username}
                      </h1>
                    </Link>
                  </div>
                  {this.props.currentUser.id === picture.user_id ? 
                  <div>
                    <ul className="header-list" id="hlist">
                    <img src="/menu.png" id="user-menu"></img>
                    <ul className="header-notifications" id="head-note">
                    <li className="item"><div className="itemdiv"
                          onClick={() => this.props.deletePicture(picture.id)} >  Delete Post </div></li>
                        <li className="item"><div className="itemdiv" onClick={() => this.props.updateProfPic(this.props.currentUser, picture)} >Make Prof Pic</div></li>
                    </ul>
                    </ul>
                  </div> : 
                  
                  this.props.myFollows[picture.user_id] && this.props.follows[this.props.myFollows[picture.user_id]] ? <input id="sub-button" type="submit" onClick={() => this.props.deleteFollow(this.props.myFollows[picture.user_id])} value="Unfollow" /> :
                  <input id="sub-button" type="submit" onClick={() => this.props.makeFollow(picture.user)} value="Follow" />
                   }

                </div>
              </div>
              <div id="indexitem" key={picture.id}>
                <h2>{picture.title}</h2>
                <img id="careful-pic" src={picture.photoUrl} />
                <h2 id="bodypost">{picture.body}</h2>
                <div className="com-things">
                  <CommentIndex history={this.props.history} currentUser={this.props.currentUser.id} picture={picture} comments={this.props.com} />
                  <CommentForm history={this.props.history} currentUser={this.props.currentUser.id} picture_id={picture.id} comment={this.props.comment} comments={this.props.com} fetchposts={this.props.fetchposts} />
                </div>
              </div>
            </div>
          </div>;
      })}
    </div>
  );
}
}

export default withRouter(PostIndex);
