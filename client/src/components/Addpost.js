import React from 'react'
import axios from 'axios'

//this components is not used in this app since it copied to the post component


class Addpost extends React.Component {
    constructor(){
        super()
        this.state={
            title:'',
            contents:'',
            posts:[]
        }
    }
    changeHandler = (e)=>{this.setState({[e.target.name]:e.target.value})}

    addpost = (e)=>{
        e.preventDefault()
        const {title, contents} = this.state
        const newPost = {title, contents}
        axios.post('http://localhost:5000/api/posts', newPost)
             .then(res=>{this.setState({posts: res.data})})
             .catch(err=>{console.log(err)})

    }

    render(){
        return(
            <div>
                <form onSubmit={this.addpost}>
                    <input type='text' name='title' placeholder='title' value={this.state.title} onChange={this.changeHandler} /> <br />
                    <input type='text' name='contents' placeholder='contents' value={this.state.contents} onChange={this.changeHandler} /> <br />
                    <button type='submit'>Addpost</button>
                </form>
            </div>
        )
    }
}

export default Addpost;