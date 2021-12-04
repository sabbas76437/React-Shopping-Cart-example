import React, { Component } from 'react';
import Counter from "./counter"; 
class Counters extends React.Component {
    state = {
        counters: [
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0}
        ]
    }
    handleIncrement = counter => {
        console.log("handleinc",counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        console.log("0",index,counters);
        counters[index]={...counter};
        console.log("1",counters[index],{...counter});
        counters[index].value ++;
        this.setState({counters});
        console.log(index,counters);
        
    };

    handleDecrement = counter => {
        console.log("handleinc",counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        console.log("0",index,counters);
        counters[index]={...counter};
        console.log("1",counters[index],{...counter});
        counters[index].value --;
        this.setState({counters});
        console.log(index,counters);
        
    };

    handleDelete = (counterId) => {
        const cou = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters:cou});
        console.log("on delete",counterId, cou  );
    } 
    render() {
        
        return (<div>
            {this.state.counters.map(counter => <Counter onDecrement ={this.handleDecrement} onIncrement = {this.handleIncrement} key = {counter.id} onDelete ={this.handleDelete} counter = {counter}/>)} 
        </div>);
    }
}
 
export default Counters;