import React, {Component} from 'react';
import axios from 'axios';
import style from './post.module.css';

class Post extends Component{

    state = {
        post: null
    }
    componentDidMount() {
        // console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
             .then(res=>{
                this.setState({
                    post: res.data
                });
             });
    }
    render() {

        const post = this.state.post ? (
            <div className={style.post}>
                <h4 className="center capitalize">{this.state.post.title}</h4>
                <p className="center">{this.state.post.body}</p>
            </div>
        ):(<div className="center">Loading Post...</div>);

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post;