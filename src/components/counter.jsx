import React, { Component } from 'react';
class Counter extends React.Component {
 

    state = {
        value :this.props.value,
        tag:['tag1','tag22','tag3']
    };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    
    styles ={
        fontSize : 100,
        fontWeight: 'bold'
    }

   
    renderTags(){
        if(this.state.tag.length === 0) return <p>No List found</p>
        return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>;
         
    }


    render() { 
        let product = {id:1};
        console.log(this.props); 
       
        return (
            <React.Fragment>
            <h1>Counter # {this.props.id}</h1>
            <span style={{fontSize:30}} className = {this.getCounterBadgeColorChange()} >{this.formatCount()}</span>
            <button onClick = {() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">increment</button>
            {this.renderTags()}
            </React.Fragment>);
    }
    handleIncrement = product =>{
        console.log("this is production in onclickfucn" , product);
        this.setState({value : this.state.value +1});
    }

    getCounterBadgeColorChange() { 
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount(){
        const {value: value} = this.state;
        return value ===0 ? "Zero" : value; 

    }
}
 
export default Counter;