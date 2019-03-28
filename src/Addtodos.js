import React, { Component } from 'react';

class Addtodos extends Component{
    state = {
        todocaption: '' ,
        iscompleted:false
    }
    handleChange = (e)=>{
        this.setState(
            {
                todocaption : e.target.value
            }
        )
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addNewTodo(this.state);
        this.setState(
            {
                todocaption:''
            }
        )
       // console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="What needs to be added?" className="task" type="text" id="todocaption" onChange={this.handleChange} value={this.state.todocaption}/>
                    <button className="submitbutton">Submit</button> 
                </form>
            </div>
        )
    }
}
export default Addtodos