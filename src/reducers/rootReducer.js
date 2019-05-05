const initState = {
    posts: [
        {id: '1', title: 'Hello World', body: 'Lorem ipsum dolor set amet'},
        {id: '2', title: 'Hello React', body: 'Lorem ipsum dolor set amet'},
        {id: '3', title: 'Hello Redux', body: 'Lorem ipsum dolor set amet'},
        {id: '4', title: 'Hello GraphQl', body: 'Lorem ipsum dolor set amet'},
        {id: '5', title: 'Hello Node', body: 'Lorem ipsum dolor set amet'}
    ]
}

const rootReducer = (state=initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post=>{
            return action.id !== post.id
        });

        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;