import React from 'react'
import axios from 'axios'
class Post extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[],
            title:'',
            contents:'',
        }
    }
    componentDidMount(){

       axios.get('http://localhost:5000/api/posts')
            .then(res=>{this.setState({posts: res.data})})
            .catch(err=>{console.log(err)})
 
    }
    changeHandler = (e)=>{this.setState({[e.target.name]:e.target.value})}

    addpost = (e)=>{
        e.preventDefault()
        const {title, contents} = this.state
        const newPost = {title, contents}
        axios.post('http://localhost:5000/api/posts', newPost)
             .then(res=>{this.setState({posts: res.data})})
             .catch(err=>{console.log(err)})

        this.setState({title:'',
                       contents:''})

    }
    
    render(){
        return(
            <div>
                {this.state.posts.map(post=>{
                 return(
                   <div className='post' key={post.id}>
                       <h4>ID :{post.id}</h4>
                       <p>Title :{post.title}</p>
                       <p>Contents :{post.contents}</p>
                       <h6>Created at :{post.created_at}</h6>
                   </div>
                   ) })}

                <form onSubmit={this.addpost} className='form'>
                    <input type='text' name='title' placeholder='title' value={this.state.title} onChange={this.changeHandler} /> <br />
                    <input type='text' name='contents' placeholder='contents' value={this.state.contents} onChange={this.changeHandler} /> <br />
                    <button type='submit'>Addpost</button>
                </form>
            </div>
        )
    }
}
export default Post;
