import React, { Component } from 'react';
class Counter extends React.Component {
    state = {
        count :0,
        tag:['tag1','tag2','tag3']
    };
    styles ={
        fontSize : 100,
        fontWeight: 'bold'
    }
    renderTags(){
        if(this.state.tag.length === 0) return <p>No List found</p>
        return <ul>{this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>;
         
    }

    render() { 
       
        return (
            <React.Fragment>
            <span style={{fontSize:30}} className = {this.getCounterBadgeColorChange()} >{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">increment</button>
            {this.renderTags()}
            </React.Fragment>);
    }
    getCounterBadgeColorChange() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0 ? "warning" : "primary");
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count ===0 ? "zERO" : count; 

    }
}
 
export default Counter;