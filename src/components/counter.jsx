import React, { Component } from 'react';
class Counter extends React.Component {
 

    // state = {
    //     value :this.props.counter.value,
    //     tag:['tag1','tag22','tag3']
    // };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    
    styles ={
        fontSize : 100,
        fontWeight: 'bold'
    }

   
    // renderTags(){
    //     if(this.state.tag.length === 0) return <p>No List found</p>
    //     return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>;
         
    // }


    render() { 
        let product = {id:1};
        console.log(this.props); 
       
        return (
            <React.Fragment>
            <h1>List Item # {this.props.counter.id}</h1>
            <span style={{fontSize : 20}} className = {this.getCounterBadgeColorChange()} >{this.formatCount()}</span>
            <button onClick = {() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-md">+</button>
            <button onClick = {() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-md m-2">-</button>
            <button className = "btn btn-danger btn-md m-2" onClick = {() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            {/* {this.renderTags()} */}
            </React.Fragment>);
    }
    // handleIncrement = product =>{
    //     console.log("this is production in onclickfucn" , product);
    //     this.setState({value : this.state.value +1});
    // }

    getCounterBadgeColorChange() { 
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount(){
        const {value: value} = this.props.counter;
        return value ===0 ? "Zero" : value; 

    }
}
 
export default Counter;