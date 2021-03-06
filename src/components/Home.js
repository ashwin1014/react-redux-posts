import React, {Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {

    // state = {
    //     posts: []
    // }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //          .then(res=>{
    //             this.setState({
    //                 posts: res.data.slice(0,10)
    //             })
    //          })
    // }



 render() {
    // console.log(this.props)
    // const { posts } = this.state;
    const { posts } = this.props;
    const postList = posts.length ? (
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                       <img src={Pokeball} alt="pokeball"/>
                        <Link to={`/${post.id}`}>
                          <div className="card-content"><span className="card-title capitalize"><strong>{post.title}</strong></span><p className="black-text">{post.body}</p></div>
                        </Link>
                    </div>
                )
            })
    ):(<div className="center">No posts yet</div>)
    return(
        <div className="container">
            <h4 className="center">Home Page</h4>
            {postList}
        </div>
    )
 }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)